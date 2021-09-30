import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import COLORS from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} />
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  header: {},
});
