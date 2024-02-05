import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const PostDetail = ({ data }) => {
  const postId = data.id;
  const commentLenght = data.comments.length;
  const firstLike = data.likedBy[0];

  const first3Like = data.likedBy.slice(0, 3);
  return (
    <View>
      <View style={[styles.row, styles.container, { paddingVertical: 5 }]}>
        <Image source={{ uri: data.profileImg }} style={[styles.profileImg]} />
        <Text style={styles.userId}> {data.userId}</Text>
      </View>
      <Image
        source={{ uri: data.img }}
        style={{ width: "100%", aspectRatio: 1 }}
      />
      <View style={styles.container}>
        {/* Like, comment, send buttons */}
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <AntDesign name="message1" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Feather name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn}>
            <MaterialIcons name="save-alt" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Liked by */}
        <View style={styles.row}>
          <View style={styles.row}>
            {first3Like.map((p, i) => (
              <Image
                key={p.img + i}
                source={{ uri: p.img }}
                style={styles.profileImg}
              />
            ))}
          </View>
          <Text style={styles.likedText}>
            Liked by
            <Text style={styles.boldText}> {firstLike.userId} </Text>
            {data.likedBy.length > 1 && (
              <Text style={styles.boldText}>and others</Text>
            )}
          </Text>
        </View>

        {/* Post tailbar */}
        <View style={styles.descContainer}>
          <Text style={styles.userId}>{data.userId}</Text>
          <Text style={styles.desc}> {data.desc}</Text>
        </View>
        {/* Comment */}
        {commentLenght > 0 && (
          <Link
            href={{
              pathname: "/comments",
              params: { postId: postId },
            }}
            asChild
          >
            <TouchableOpacity>
              <Text style={styles.viewAll}>
                View all {commentLenght} comments
              </Text>
            </TouchableOpacity>
            {/* First comment */}
          </Link>
        )}
      </View>
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  viewAll: {
    fontSize: 18,
    color: "gray",
    paddingBottom: 10,
  },
  profileImg: { width: 29, height: 29, borderRadius: 29 / 2 },
  boldText: {
    fontWeight: "bold",
  },
  likedText: {
    fontSize: 15,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 18,
    // backgroundColor: "black",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 13,
    paddingVertical: 12,
  },
  btn: {
    // backgroundColor: "black",
  },
  userId: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 18,
  },
  descContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
});
