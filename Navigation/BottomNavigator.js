import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Screens/Home";
import Cart from "../Screens/Cart";
import COLORS from "../consts/colors";

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        Style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="LocalMall" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favorite" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
