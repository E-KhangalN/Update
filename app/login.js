import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";
const logoImg = require("./src/assets/logoinst.png");
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} />
      <TextInput
        style={styles.input}
        placeholder="Phone number, email or username"
      />
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableOpacity>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  input: {
    backgroundColor: "#EEEEEE",
    borderColor: "#C5C5C5",
    borderWidth: 1,
    color: "#848484",
    padding: 10,
    borderRadius: 6,
  },
});
