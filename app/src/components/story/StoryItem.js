import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
const border = require("../../assets/iimg/story-border.png");
const StoryItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={border} style={styles.border}>
        <Image source={{ uri: data.img }} style={styles.image} />
      </ImageBackground>
      <Text numberOfLines={1} style={styles.userId}>
        {data.userId}
      </Text>
    </TouchableOpacity>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  userId: {
    fontSize: 12,
    fontWeight: "400",
    width: 67,
  },
  border: {
    width: 67,
    height: 67,

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
