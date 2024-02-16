import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { about, postData } from "../../data";
import About from "../src/components/profile/About";
import { ScrollView } from "react-native-gesture-handler";
import Posts from "../src/components/profile/Posts";

const Profile = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  // Үзүүлэх ёстой постын дугаар
  const postId = params.id;

  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
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
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
  },
});
