import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const orders = [
  { id: '1', restaurant: 'Pizza Hut', date: 'Apr 20', status: 'Delivered' },
  { id: '2', restaurant: 'KFC', date: 'Apr 17', status: 'Out for delivery' },
];

const OrderHistoryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Order History</Text>
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.orderCard}>
          <Text style={styles.restaurant}>{item.restaurant}</Text>
          <Text style={styles.details}>{item.date} • {item.status}</Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  orderCard: { padding: 16, borderBottomWidth: 1, borderColor: '#eee' },
  restaurant: { fontSize: 16, fontWeight: '600' },
  details: { fontSize: 14, color: '#666' },
});

export default OrderHistoryScreen;
