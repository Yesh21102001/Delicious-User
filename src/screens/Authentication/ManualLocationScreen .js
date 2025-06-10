import React, { useEffect, useState } from "react";
import {
  View, Text, TextInput, StyleSheet,
  TouchableOpacity, Dimensions, ScrollView,
  Alert, ActivityIndicator
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://192.168.29.186:2000/api/location";

const ManualLocationScreen = ({ navigation }) => {
  const [marker, setMarker] = useState({ latitude: 37.78825, longitude: -122.4324 });
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (!userId) return setLoading(false);

        const res = await axios.get(`${BASE_URL}/${userId}`);
        const data = res.data;

        setAddress1(data.address1 || "");
        setAddress2(data.address2 || "");
        setCity(data.city || "");
        setPostalCode(data.postalCode || "");
        setMarker({ latitude: data.latitude, longitude: data.longitude });
      } catch (err) {
        console.log("Fetch location failed:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  const handleSubmit = async () => {
    if (!address1 || !city || !postalCode) {
      return Alert.alert("Missing Fields", "Please fill all required fields");
    }

    const fullAddress = `${address1}, ${address2 ? address2 + "," : ""} ${city}, ${postalCode}`;
    try {
      const geoResults = await Location.geocodeAsync(fullAddress);
      if (geoResults.length > 0) {
        const { latitude, longitude } = geoResults[0];
        setMarker({ latitude, longitude });

        const userId = await AsyncStorage.getItem("userId");
        if (!userId) return Alert.alert("Error", "UserId not found");

        await axios.post(`${BASE_URL}/save`, {
          userId,
          address1,
          address2,
          city,
          postalCode,
          latitude,
          longitude,
        });

        Alert.alert("Success", "Location saved successfully.");
      } else {
        Alert.alert("Not Found", "Unable to find that address on the map.");
      }
    } catch (err) {
      console.error("Error:", err.message);
      Alert.alert("Error", "Something went wrong.");
    }
  };

  const handleMarkerDrag = async (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarker({ latitude, longitude });

    const [place] = await Location.reverseGeocodeAsync({ latitude, longitude });
    if (place) {
      setAddress1(place.name || "");
      setAddress2(place.street || "");
      setCity(place.city || place.subregion || "");
      setPostalCode(place.postalCode || "");
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: marker.latitude,
          longitude: marker.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={marker} draggable onDragEnd={handleMarkerDrag} />
      </MapView>

      <ScrollView style={styles.form} contentContainerStyle={{ paddingBottom: 30 }}>
        <Text style={styles.label}>Address Line 1 *</Text>
        <TextInput
          style={styles.input}
          placeholder="Flat / Building / Street"
          value={address1}
          onChangeText={setAddress1}
        />

        <Text style={styles.label}>Address Line 2</Text>
        <TextInput
          style={styles.input}
          placeholder="Landmark (optional)"
          value={address2}
          onChangeText={setAddress2}
        />

        <Text style={styles.label}>City *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter City"
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.label}>Postal Code *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Postal Code"
          value={postalCode}
          onChangeText={setPostalCode}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit}>
          <Text style={styles.primaryButtonText}>Pin Location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.primaryButton, styles.continueButton]}
          onPress={() => navigation.navigate("NotificationScreen")}
        >
          <Text style={styles.primaryButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  map: { height: height * 0.4, width: "100%" },
  form: { flex: 1, paddingHorizontal: 20, paddingTop: 16 },
  label: { fontSize: 14, color: "#555", marginBottom: 4, fontWeight: "500" },
  input: {
    backgroundColor: "#bb8a52",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: "#0c3b2e",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  continueButton: { backgroundColor: "#ffba00" },
  primaryButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default ManualLocationScreen;
