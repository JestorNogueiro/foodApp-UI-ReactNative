import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import COLORS from "../consts/colors";

const CartCard = ({ food }) => {
  return (
    <View style={styles.container}>
      <Image source={food.image} style={styles.image} />
      <Text>{food.name}</Text>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    borderColor: COLORS.white,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
});
