import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
const DmItem = ({ data }) => {
  return (
    <View>
      <Image source={{ uri: data.img }} /> {/*зургаа оруулж өгнө.*/}
      <Text>{data.userId}</Text>
      <Text>{data.lastMsg.text}</Text>
      <Text>{data.lastMsg.date}</Text>
    </View>
  );
};

export default DmItem;

const styles = StyleSheet.create({});
