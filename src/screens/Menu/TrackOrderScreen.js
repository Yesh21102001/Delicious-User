import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TrackOrderScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/get1.jpg')} style={styles.image} />
      <Text style={styles.statusText}>Your order is on the way!</Text>
      <Text style={styles.estimate}>Estimated delivery time: 25 mins</Text>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Delivery Partner</Text>
        <Text style={styles.value}>Rajesh (2.1 km away)</Text>
        <Text style={styles.label}>Restaurant</Text>
        <Text style={styles.value}>Spice Villa, Main Street</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppTabs')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginTop: 40,
  },
  statusText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginTop: 30,
  },
  estimate: {
    fontSize: 16,
    color: '#555',
    marginTop: 6,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  button: {
    backgroundColor: '#fc8019',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TrackOrderScreen;
