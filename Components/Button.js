import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import COLORS from "../consts/colors";

const Button = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}> {title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const AddToCardButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={{ backgroundColor: COLORS.white, ...styles.container }}>
        <Text style={{ color: COLORS.primary, ...styles.title }}> {title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default { Button, AddToCardButton };

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
