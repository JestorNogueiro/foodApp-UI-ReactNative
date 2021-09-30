import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

import COLORS from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreen = ({ navigation, route }) => {
  const item = route.param;
  console.log(item);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      </View>
      <ScrollView>
        <View>
          <Image source={item.image} style={{ height: 220 }} />
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
});
