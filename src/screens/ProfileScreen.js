import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out!');
    navigation.replace('Onboard');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileHeader}>
        <Ionicons name="person-circle-outline" size={100} color="#555" />
        <Text style={styles.name}>Hello, User!</Text>
        <Text style={styles.email}>user@example.com</Text>
      </View>

      {/* Menu Options */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('OrderHistory')}>
        <Ionicons name="receipt-outline" size={24} color="#333" style={styles.icon} />
        <Text style={styles.menuText}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Offers')}>
        <Ionicons name="pricetags-outline" size={24} color="#333" style={styles.icon} />
        <Text style={styles.menuText}>Offers</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ManualLocationScreen')}>
        <Ionicons name="location-outline" size={24} color="#333" style={styles.icon} />
        <Text style={styles.menuText}>Saved Addresses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={24} color="#333" style={styles.icon} />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('Help Center', 'Email us at help@example.com')}>
        <Ionicons name="help-circle-outline" size={24} color="#333" style={styles.icon} />
        <Text style={styles.menuText}>Help Center</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="red" style={styles.icon} />
        <Text style={[styles.menuText, { color: 'red' }]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default ProfileScreen;
