import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

import COLORS from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 30;

const Card = ({ food }) => {
  return (
    <View style={styles.card}>
      <Image source={food.image} style={styles.cardImage} />
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{food.name}</Text>
        <Text style={{ fontSize: 18, color: COLORS.grey, marginTop: 2 }}>
          {food.ingredients}
        </Text>
      </View>
      <View style={styles.priceSection}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>₹ {food.price}</Text>
        <View style={styles.addItem}>
          <Icon name="add" size={20} color={COLORS.white} />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  addItem: {
    backgroundColor: COLORS.primary,
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 220,
    width: cardWidth,
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,

    // shadowColor: COLORS.dark,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  cardImage: {
    width: 100,
    height: 100,
    top: -35,
    alignSelf: "center",
  },
  priceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 8,
  },
});
