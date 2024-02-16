import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import StoryItem from "./story/StoryItem";
const DmItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/*<Image source={{ uri: data.img }} /> зургаа оруулж өгнө.*/}
      <StoryItem data={{ img: data.img }} />
      <View>
        <View>
          <Text style={styles.userId}>{data.userId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{data.lastMsg.text}</Text>
          <Text style={styles.date}>{data.lastMsg.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DmItem;

const styles = StyleSheet.create({
  userId: { fontSize: 23, fontWeight: 500 },
  text: {
    fontSize: 23,
  },
  date: {
    fontSize: 20,
    color: "gray",
  },
  container: {
    flexDirection: "row" /*Чиглэлийг нь хэвтээ*/,
    alignItems: "center" /*босоо тэнхлэгийнх нь дагуу голлуулах*/,
    gap: 17,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
