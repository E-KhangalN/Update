import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
const proImg = require("../../assets/iimg/pro.jpg");
const About = () => {
  return (
    <View>
      <View style={styles.container}>
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
          <Text style={styles.bioDesc}>
            insta chalai na temon -.- Btw Hi :V
          </Text>
          <Text style={styles.bioDesc}>Byeeeeeeeeeee.</Text>
        </View>
        {/* Товч */}
        <View style={styles.edit}>
          <TouchableOpacity style={styles.editbtn}>
            <Text style={styles.editText}> Edit Profile </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editbtn}>
            <Text style={styles.editText}> Хичээлүүд </Text>
          </TouchableOpacity>
        </View>
        {/* Tab pages */}
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
  bio: {
    marginBottom: 8,
  },
  bioName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bioDesc: {
    fontSize: 20,
  },
  editbtn: {
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  editText: {
    fontSize: 18,
    fontWeight: "400",
  },
  edit: {
    flexDirection: "row",
  },
  container: {
    padding: 8,
    flex: 1,
  },
});
