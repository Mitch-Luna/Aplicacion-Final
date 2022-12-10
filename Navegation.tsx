import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


import Home from "./Screen/Home";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import Service from "./Screen/Service";
import Profile from "./Screen/Profile";
import Favourite from './Screen/Favourite';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerPressColor: "#EED63B",
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: 'blue',
        tabBarItemStyle: { backgroundColor: '#EED63B', height: 60 },
      }}
    >

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen name="favourite" component={Favourite}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="heart" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen name="register" component={Register}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="login" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      
      <Tab.Screen name="Service" component={Service}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="taxi" size={24} color={color} />
          ),
          headerShown: false,
        }} />
      <Tab.Screen name="User" component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={30} color={color} />
          ),
          headerShown: false,
        }} />

    </Tab.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  }
});


