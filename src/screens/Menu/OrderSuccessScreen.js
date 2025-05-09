import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OrderSuccessScreen = ({ navigation }) => (
  <View style={styles.container}>
    {/* <Image source={require('../../assets/splash.png')} style={styles.image} /> */}
    <Text style={styles.title}>🎉 Order Placed Successfully!</Text>
    <Text style={styles.subtitle}>Sit tight! We’re preparing your order.</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppTabs')}>
      <Text style={styles.buttonText}>Go to Home</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  image: { width: 200, height: 200, marginBottom: 20, resizeMode: 'contain' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#000', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#555', textAlign: 'center', marginVertical: 10 },
  button: { backgroundColor: '#fc8019', padding: 14, borderRadius: 8, marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default OrderSuccessScreen;
