import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import About from "../../src/components/profile/About";
import Post from "../../src/components/profile/Post";
import Posts from "../../src/components/profile/Posts";
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
});
