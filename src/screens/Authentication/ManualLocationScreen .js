import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const ManualLocationScreen = ({ navigation }) => {
  const [marker, setMarker] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = async () => {
    if (!address1 || !city || !postalCode) {
      Alert.alert("Missing Fields", "Please fill all required fields");
      return;
    }

    const fullAddress = `${address1}, ${
      address2 ? address2 + "," : ""
    } ${city}, ${postalCode}`;

    try {
      const geoResults = await Location.geocodeAsync(fullAddress);
      if (geoResults.length > 0) {
        const { latitude, longitude } = geoResults[0];
        setMarker({ latitude, longitude });
      } else {
        Alert.alert("Not Found", "Unable to find that address on the map.");
      }
    } catch (err) {
      console.error("Geocode error:", err);
      Alert.alert("Error", "Could not find location for that address.");
    }
  };

  return (
    <View style={styles.container}>
      {/* 🗺 Map Section */}
      <MapView
        style={styles.map}
        region={{
          latitude: marker.latitude,
          longitude: marker.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={marker}
          draggable
          onDragEnd={(e) => {
            const { latitude, longitude } = e.nativeEvent.coordinate;
            setMarker({ latitude, longitude });
          }}
        />
      </MapView>

      {/* 📄 Address Fields */}
      <ScrollView
        style={styles.form}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
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

        {/* Pin Location Button */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleSubmit}>
          <Text style={styles.primaryButtonText}>Pin Location</Text>
        </TouchableOpacity>

        {/* Continue Button */}
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
  map: {
    height: height * 0.4,
    width: "100%",
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#e2e1cf",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: "#758058",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: "#333", // Dark button for contrast
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ManualLocationScreen;
