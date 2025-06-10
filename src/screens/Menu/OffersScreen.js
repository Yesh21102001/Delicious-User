import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const offers = [
  { id: '1', code: 'NEW50', desc: '50% off for new users' },
  { id: '2', code: 'SAVE30', desc: 'Flat ₹30 off on orders above ₹199' },
];

const OffersScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Available Offers</Text>
    <FlatList
      data={offers}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.code}>{item.code}</Text>
          <Text>{item.desc}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: { padding: 16, borderRadius: 8, backgroundColor: '#6d9773', marginBottom: 10 },
  code: { fontWeight: 'bold', fontSize: 16, color: "#ffba00" },
});

export default OffersScreen;
