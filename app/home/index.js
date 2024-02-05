import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { postData, stories } from "../../data";
import PostDetail from "../src/components/profile/PostDetail";
import Story from "../src/components/story";

const home = () => {
  const list = postData;
  return (
    <ScrollView style={{ flex: 1 }}>
      <Story stories={stories} />
      {list.map((data) => (
        <PostDetail data={data} />
      ))}
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({});
