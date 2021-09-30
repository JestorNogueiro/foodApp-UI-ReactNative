import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = ({ food }) => {
  return (
    <View>
      <Text>{food.name}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
