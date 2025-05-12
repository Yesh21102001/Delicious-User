import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Collapsible from "react-native-collapsible";

const menuData = [
  {
    category: "Biryani",
    items: [
      {
        id: "1",
        name: "Chicken Biryani",
        price: 199,
        description: "Spicy chicken biryani with basmati rice.",
        image:
          "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740",
        type: "non-veg",
      },
      {
        id: "2",
        name: "Veg Biryani",
        price: 159,
        description: "Delicious vegetable biryani cooked with herbs.",
        image:
          "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740",
        type: "veg",
      },
    ],
  },
  {
    category: "Starters",
    items: [
      {
        id: "3",
        name: "Paneer Tikka",
        price: 149,
        description: "Grilled paneer marinated with spices.",
        image:
          "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740",
        type: "veg",
      },
      {
        id: "4",
        name: "Chicken 65",
        price: 169,
        description: "Spicy deep-fried chicken starter.",
        image:
          "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740",
        type: "non-veg",
      },
    ],
  },
  {
    category: "Combos",
    items: [
      {
        id: "5",
        name: "Veg Thali",
        price: 199,
        description: "Complete vegetarian meal plate.",
        image:
          "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740",
        type: "veg",
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        id: "6",
        name: "Mango Lassi",
        price: 79,
        description: "Sweet mango yogurt drink.",
        image:
          "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740",
        type: "veg",
      },
    ],
  },
];

const MenuScreen = () => {
  const [activeSections, setActiveSections] = useState({});

  const toggleSection = (category) => {
    setActiveSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const renderItem = (item) => (
    <View style={styles.itemContainer} key={item.id}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <View style={styles.itemHeader}>
          <View
            style={[
              styles.foodTypeIndicator,
              {
                borderColor: item.type === "veg" ? "green" : "red",
              },
            ]}
          >
            <View
              style={[
                styles.foodTypeDot,
                {
                  backgroundColor: item.type === "veg" ? "green" : "red",
                },
              ]}
            />
          </View>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <Text style={styles.itemPrice}>₹{item.price}</Text>
        <Text style={styles.itemDesc}>{item.description}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {menuData.map((section) => (
        <View key={section.category} style={styles.accordionSection}>
          <TouchableOpacity
            style={styles.accordionHeader}
            onPress={() => toggleSection(section.category)}
          >
            <Text style={styles.accordionTitle}>{section.category}</Text>
            <Text style={styles.accordionToggle}>
              {activeSections[section.category] ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>

          <Collapsible collapsed={!activeSections[section.category]}>
            {section.items.map(renderItem)}
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },
  accordionSection: {
    marginBottom: 16,
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  accordionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  accordionToggle: {
    fontSize: 14,
    fontWeight: "600",
  },
  itemContainer: {
    flexDirection: "row",
    marginTop: 12,
    paddingBottom: 12,
    backgroundColor: "#e2e1cf",
    alignItems: "center", 
    padding: 10,
    borderRadius: 5,
  },
  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
    justifyContent: "center",
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  foodTypeIndicator: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  foodTypeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemPrice: {
    fontSize: 14,
    color: "#444",
    marginVertical: 2,
  },
  itemDesc: {
    fontSize: 12,
    color: "#777",
  },
  addButton: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#00b386",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
  },
  addButtonText: {
    color: "#00b386",
    fontWeight: "600",
  },
});

export default MenuScreen;
