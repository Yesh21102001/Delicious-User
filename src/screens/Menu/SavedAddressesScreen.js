import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const addresses = [
  { id: '1', label: 'Home', location: '38 Forest Manor Rd, Toronto' },
  { id: '2', label: 'Work', location: '12 King St W, Toronto' },
];

const SavedAddressesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Saved Addresses</Text>
    <FlatList
      data={addresses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { marginBottom: 16, borderBottomWidth: 1, borderColor: '#eee', paddingBottom: 10 },
  label: { fontSize: 16, fontWeight: '600' },
  location: { fontSize: 14, color: '#666' },
});

export default SavedAddressesScreen;
