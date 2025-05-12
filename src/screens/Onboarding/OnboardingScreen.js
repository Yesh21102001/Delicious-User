import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const slides = [
    {
      id: 1,
      title: "Discover Restaurants",
      description: "Explore the best cuisines from your favorite restaurants.",
      image: require("../../assets/get1.jpg"),
    },
    {
      id: 2,
      title: "Quick & Easy Ordering",
      description: "Order your favorite dishes in just a few clicks.",
      image: require("../../assets/splash.png"),
    },
    {
      id: 3,
      title: "Fast Delivery",
      description:
        "Get your food delivered hot and fresh, right to your doorstep.",
      image: require("../../assets/splash.png"),
    },
  ];

  const handleGetStarted = () => {
    setModalVisible(true);
  };

  const handleSendOtp = () => {
    if (phoneNumber.trim().length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    alert(`OTP sent to ${phoneNumber}`);
    navigation.replace("OTP Verification", { phoneNumber });
  };

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        loop={false}
      >
        {slides.map((slide, index) => (
          <View key={slide.id} style={styles.slide}>
            <ImageBackground
              source={slide.image}
              style={styles.backgroundImage}
            >
              <LinearGradient
                colors={["rgba(226, 225, 207, 0.3)", "rgba(191, 187, 149, 0.5)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.overlay}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.description}>{slide.description}</Text>
              </View>
              {index === slides.length - 1 && (
                <View style={{ flex: 1, marginTop: 50, marginBottom: 20 }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleGetStarted}
                  >
                    <Text style={styles.buttonText}>Get Started</Text>
                  </TouchableOpacity>
                </View>
              )}
            </ImageBackground>
          </View>
        ))}
      </Swiper>

      {/* Bottom Sheet Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.welcomeText}>Welcome to Delicious Biryani's</Text>
          <Text style={styles.loginPrompt}>Login with your phone number</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleSendOtp}>
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: { flex: 1 },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  overlay: { ...StyleSheet.absoluteFillObject },
  textContainer: {
    position: "absolute",
    bottom: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "900",
    color: "#fff",
    textAlign: "left",
    marginBottom: 5,
  },
  description: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    textAlign: "left",
    lineHeight: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#758058",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  dotStyle: {
    backgroundColor: "#ccc",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: "#758058",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  // Modal styles
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  loginPrompt: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#e2e1cf",
  },
  loginButton: {
    backgroundColor: "#758058",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#3B271C",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default OnboardingScreen;
