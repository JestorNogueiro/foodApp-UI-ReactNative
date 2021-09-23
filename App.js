import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import COLORS from "./consts/colors";

// screens
import FrontScreen from "./Screens/FrontScreen";
import DetailsScreen from "./Screens/DetailsScreen";

// bottom navigator
import BottomNavigator from "./Navigation/BottomNavigator";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FrontScreen" component={FrontScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
