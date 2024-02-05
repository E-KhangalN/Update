import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Posts from "../src/components/profile/PostDetail";
import About from "../src/components/profile/About";
import { about, postData } from "../../data";
const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <About
        img={about.img}
        name={about.name}
        bio1={about.bio1}
        bio2={about.bio2}
        followers={about.followers}
        following={about.following}
        postNum={about.postNum}
      />
      {/* Үндсэн пост хэсэг */}
      <Posts data={postData} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
  imgBtn: {
    width: "32%",
    aspectRatio: 1,
    height: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  postContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 3,
    flexWrap: "wrap",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 14,
  },
  active: {
    borderBottomWidth: 2,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  img: { backgroundColor: "black" },
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
});
