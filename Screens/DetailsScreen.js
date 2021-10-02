import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import COLORS from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AddToCardButton } from "../Components/Button";

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.white }}
            >
              {item.name}
            </Text>
            {/* favorite section */}
            <View style={styles.itemContainer}>
              <Icon name="favorite-border" size={25} color={COLORS.primary} />
            </View>
          </View>
          {/* dummy item details */}
          <Text style={styles.itemDetails}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            quaerat nemo recusandae, nobis ad earum commodi id sed magnam. Quae
            fugiat nostrum aspernatur, explicabo laudantium reprehenderit. Dolor
            excepturi est at!
          </Text>
          <View style={styles.addToCartButton}>
            <AddToCardButton
              title="Add To Card"
              onPress={() => navigation.navigate("Cart")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.white,
    height: 100,
    // justifyContent: "center",
    flexDirection: "row",
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  itemContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  itemDetails: {
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 22,
    fontSize: 18,
    color: COLORS.white,
  },
  addToCartButton: {},
});
