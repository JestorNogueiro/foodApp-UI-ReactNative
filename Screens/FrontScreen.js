import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../consts/colors";
import Button from "../Components/Button";
const FrontScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 400 }}>
        <Image
          style={{
            width: "100%",
            resizeMode: "contain",
            top: -150,
            zIndex: 10,
          }}
          source={require("../assets/images/onboardImage.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
          >
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 14,
              textAlign: "center",
              color: COLORS.grey,
            }}
          >
            Welcome To my Food Store,
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              color: COLORS.grey,
            }}
          >
            We help you find best food
          </Text>
        </View>
      </View>
      <Button title="Get Started" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
};

export default FrontScreen;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  indicator: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
