import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SettingsScreen = () => {
  const handleSupport = () => {
    Alert.alert("Help Center", "Contact support at support@example.com");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handleSupport}>
        <Text>Contact Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text>FAQs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={{ color: 'red' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});

export default SettingsScreen;
