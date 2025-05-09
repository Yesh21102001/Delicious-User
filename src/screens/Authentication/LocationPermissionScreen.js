import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';

const LocationPermissionScreen = ({ navigation }) => {
  const handleLocationAccess = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please allow location access to continue.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      console.log("Current Location:", location);

      // Optional: Reverse geocode to get address
      const [place] = await Location.reverseGeocodeAsync(location.coords);
      const formattedAddress = `${place.name}, ${place.city}`;
      console.log("Address:", formattedAddress);

      // You can pass the address or coords to next screen
      navigation.navigate('ManualLocationScreen', { userLocation: formattedAddress });

    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Could not fetch location.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/location.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>What's your location?</Text>
      <Text style={styles.subtitle}>
        We need your location to show available restaurants & products
      </Text>

      <TouchableOpacity style={styles.primaryButton} onPress={handleLocationAccess}>
        <Text style={styles.primaryButtonText}>Allow location access</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ManualLocationScreen')}>
        <Text style={styles.secondaryText}>Enter location manually</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 24 },
  image: { width: 200, height: 200, marginBottom: 20, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 10 },
  subtitle: { fontSize: 14, textAlign: 'center', color: '#666', marginBottom: 30 },
  primaryButton: {
    backgroundColor: '#fc8019',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 12,
  },
  primaryButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  secondaryText: { color: '#fc8019', fontWeight: 'bold' },
});

export default LocationPermissionScreen;
