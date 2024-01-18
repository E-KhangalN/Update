import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Нүүр хуудас",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Миний тухай",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
