import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [isVeg, setIsVeg] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Top Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://cdn.dribbble.com/userupload/32848511/file/original-1dfd007285c80201ac71ee4d0070a0bf.jpg?resize=1024x768&vertical=center",
          }}
          style={styles.bannerImage}
        />
      </View>

      {/* Veg/Non-Veg Toggle */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Veg Only</Text>
        <Switch value={isVeg} onValueChange={setIsVeg} />
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["Pizza", "Burger", "Juice", "Desserts"].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740",
                }}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Popular Items Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bestsellers</Text>
        <View style={styles.itemsContainer}>
          {["Margherita Pizza", "Burger", "Pasta", "Fries"]
            .filter((item) => (isVeg ? item !== "Burger" : true))
            .map((item, index) => (
              <View key={index} style={styles.itemCard}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?t=st=1742108594~exp=1742112194~hmac=7b267105a55d957dd5284aff600445dd7bbb93621953702e1c93b33236d337c0&w=996",
                  }}
                  style={styles.itemImage}
                />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item}</Text>
                  <Text style={styles.itemPrice}>$12</Text>
                  <Text style={styles.itemType}>
                    {item === "Burger" ? "Non-Veg" : "Veg"}
                  </Text>
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <Ionicons name="add-circle" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7", // Light background color
    paddingTop: 20,
    paddingBottom: 20,
  },
  bannerContainer: {
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    resizeMode: "cover",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: "space-between",
  },
  filterText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#444",
    marginBottom: 10,
  },
  categoryButton: {
    alignItems: "center",
    marginRight: 20,
    backgroundColor: "#FF6F61", // Vibrant category button color
    borderRadius: 15,
    padding: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  categoryImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  categoryText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  itemsContainer: {
    flexDirection: "column",
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "#666",
  },
  itemType: {
    fontSize: 14,
    color: "#28a745", // Green for Veg items
  },
  addButton: {
    backgroundColor: "#FF5733",
    borderRadius: 30,
    padding: 10,
    elevation: 3,
  },
});

export default HomeScreen;
