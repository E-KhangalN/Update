import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const Page = () => {
  return <Redirect href={"login"} />;
};

export default Page;

const styles = StyleSheet.create({});
