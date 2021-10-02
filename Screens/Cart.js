import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";

import COLORS from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
