import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen  from "./screens/ProfileScreen";
import SavedScreen from  './screens/SavedScreen';
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import RegisterScreen from "./screens/RegisterScreen";


const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="home" size={24} color="black" />
              ) : (
                <Entypo name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="black" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={24} color="black" />
              ) : (
                <Ionicons name="notifications-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="black" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
     <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
