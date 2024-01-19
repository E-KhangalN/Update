import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const Page = () => {
  return (
    <Redirect href={"/home"} />
    //  <View>
    //  <Text>Page</Text>
    //  <Link href={'/home'} >Нүүр хуудас </Link>
    //  <Link href={'/movies'} > Movies </Link>
    //  <Link href={'/tic-tac'} >Tic tac </Link>
    //  </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
