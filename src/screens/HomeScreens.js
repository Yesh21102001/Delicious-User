import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [isVeg, setIsVeg] = useState(false);

  const categories = [
    { name: "Pizza" },
    { name: "Burger" },
    { name: "Juice" },
    { name: "Desserts" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={["#bfbb95", "#e2e1cf"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.topSection}
        >
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
        </LinearGradient>

        {/* Categories Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryButton}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg",
                  }}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryText}>{category.name}</Text>
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
                      uri: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
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
                    <Ionicons name="add-circle" size={30} color="#758058" />
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFA500",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    paddingBottom: 15,
    paddingTop: 15,
  },
  bannerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  bannerImage: {
    width: "90%",
    height: 150,
    borderRadius: 15,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  filterText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: "#bfbb95",
    alignItems: "center",
    marginRight: 15,
    padding: 10,
    borderRadius: 12,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "600",
  },
  itemsContainer: {
    flexDirection: "column",
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 3,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#666",
  },
  itemType: {
    fontSize: 12,
    color: "green",
  },
  addButton: {
    padding: 5,
  },
});

export default HomeScreen;
