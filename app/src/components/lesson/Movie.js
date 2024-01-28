import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Movie = ({ name, desc, img }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.name}> {name}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 10,
    alignItems: "center",
    width: 400,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    borderRadius: 20,
  },
  img: {
    width: 300,
    height: 400,
    borderRadius: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 16,
  },
});
