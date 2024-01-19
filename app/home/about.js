import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const proImg = require("../../assets/iimg/pro.jpg");
const About = () => {
  return (
    <View>
      {/* Толгой хэсэг */}
      <View style={styles.header}>
        <Image source={proImg} style={styles.proImg} />
        <View style={styles.followers}>
          <View style={styles.followersItem}>
            <Text style={styles.followersText}> 6 </Text>
            <Text style={styles.followersText}> Post </Text>
          </View>
          <View style={styles.followersItem}>
            <Text style={styles.followersText}> 147 </Text>
            <Text style={styles.followersText}> Followers </Text>
          </View>
          <View style={styles.followersItem}>
            <Text style={styles.followersText}> 634 </Text>
            <Text style={styles.followersText}> Following </Text>
          </View>
        </View>
      </View>
      {/* bio */}
      <View style={styles.bio}>
        <Text style={styles.bioName}>Md Sazid</Text>
        <Text style={styles.bioDesc}>insta chalai na temon -.- Btw Hi :V</Text>
        <Text style={styles.bioDesc}>Byeeeeeeeeeee.</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  proImg: {
    width: 107,
    height: 107,
    borderRadius: "50%",
    flex: 1,
  },
  followers: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  followersText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  followersItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  bio: {},
  bioName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bioDesc: {
    fontSize: 20,
  },
});
