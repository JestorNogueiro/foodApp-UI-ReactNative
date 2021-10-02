import React from "react";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";

import COLORS from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

import foodData from "../consts/foodData";
import CartCard from "../Components/CartCard";
const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foodData}
        renderItem={({ item }) => <CartCard food={item} />}
      />
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
