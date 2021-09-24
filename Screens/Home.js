import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import COLOR from "../consts/colors";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28 }}>Hello,</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold" }}> Jestor</Text>
          </View>
          <Text style={styles.subTitle}>What do you want Today</Text>
        </View>
        <Image
          source={require("../assets/images/person.png")}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subTitle: {
    color: COLOR.grey,
    fontSize: 22,
    marginTop: 5,
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    borderRadius: 50,
  },
});
