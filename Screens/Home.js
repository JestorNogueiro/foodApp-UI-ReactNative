import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import categories from "../consts/categories";
import COLOR from "../consts/colors";

import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native-web";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const ListCategory = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      >
        {categories.map((catg, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <View
              style={[
                styles.categoryBtn,
                {
                  backgroundColor:
                    selectedCategory == index ? COLOR.primary : COLOR.secondary,
                },
              ]}
            >
              <View onPress={(index) => setSelectedCategory(index)}>
                {/* <Image source={{ require({' catg.image '})}} /> */}
                <Text>{catg.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* header section */}
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28 }}>Hello,</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold" }}> Jestor</Text>
          </View>
          <Text style={styles.subTitle}>What do you want Today</Text>
        </View>
        <Image
          source={require("../assets/images/person.png")}
          style={styles.image}
        />
      </View>
      {/* header section ends */}

      {/* search input */}
      <View style={styles.searchSection}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput style={styles.textInput} placeholder="Search for food" />
        </View>
        <View style={styles.sttBtn}>
          <Icon name="tune" size={28} color={COLOR.white} />
        </View>
      </View>
      <View>
        <ListCategory />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  subTitle: {
    color: COLOR.grey,
    fontSize: 22,
    marginTop: 5,
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    borderRadius: 50,
  },
  searchSection: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLOR.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 5,
    outline: "none !important",
    borderWidth: 0,
  },
  sttBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLOR.primary,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  listContainer: {
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 50,
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
});
