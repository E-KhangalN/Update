import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import StoryItem from "./StoryItem";

const Story = ({ stories = [] }) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.container}
    >
      {stories.map((obj) => (
        <StoryItem data={obj} />
      ))}
    </ScrollView>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 8,
  },
});
