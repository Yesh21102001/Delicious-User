import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RegistrationScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");

  const handleRegister = () => {
    if (!name) {
      Alert.alert("Error", "Full name is required.");
      return;
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    navigation.replace("LocationPermissionScreen");
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <View style={styles.container}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.heading}>Complete Your Registration</Text>
        </View>

        {/* Scrollable Form */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={[styles.input, { backgroundColor: "#f5f5f5" }]}
            value={phoneNumber}
            editable={false}
          />

          <Text style={styles.label}>Referral Code (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Have a referral code?"
            placeholderTextColor="#aaa"
            value={referral}
            onChangeText={setReferral}
          />
        </ScrollView>
      </View>

      {/* Button at bottom */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    marginLeft: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 4,
  },
  buttonWrapper: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#fc8019",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default RegistrationScreen;
