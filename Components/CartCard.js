import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CartCard = ({ food }) => {
  return (
    <View>
      <Text>{food.name}</Text>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({});
