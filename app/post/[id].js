import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { about, postData } from "../../data";
import {
  AntDesign,
  FontAwesome5,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

const Post = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  // Үзүүлэх ёстой постын дугаар
  const postId = params.id;
  // Бүх постын жагсаалтаас харуулах датагаа хайж олно
  const data = postData.find((post) => post.id == postId);

  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);

  const likedBy = data.likedBy?.slice(0, 3) || [];

  const firstLike = likedBy.length > 0 ? likedBy[0].userId : "";
  const firstComment = data.comments?.length > 0 ? data.comments[0] : {};
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      {/* User id */}
      <View
        style={[
          styles.row,
          styles.gap13,
          { paddingVertical: 12, paddingHorizontal: 23 },
        ]}
      >
        <Image source={{ uri: about.img }} style={styles.proImg} />
        <Text style={styles.userId}>{about.userId}</Text>
      </View>

      <Image
        source={{ uri: data.img }}
        style={{ width: "100%", aspectRatio: 1 }}
      />
      <View style={styles.container}>
        {/* Like, comment, share,save buttons */}
        <View style={styles.btnContainer}>
          <View style={[styles.row, styles.gap13]}>
            <TouchableOpacity>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="comment" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="save-alt" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Liked by */}
        <View style={[styles.row, styles.gap13]}>
          <View style={styles.row}>
            {likedBy.map((user) => (
              <Image source={{ uri: user.img }} style={styles.proImg} />
            ))}
          </View>
          {firstLike && (
            <Text style={styles.likedByText}>
              Liked by <Text style={styles.boldText}>{firstLike}</Text> and
              <Text style={styles.boldText}> others</Text>
            </Text>
          )}
        </View>
        {/* Post tailbar */}
        <View style={styles.descContainer}>
          <Text style={styles.userId}>{data.userId}</Text>
          <Text style={styles.desc}> {data.desc}</Text>
        </View>
        {/* Comments */}
        {data.comments?.map((comment) => (
          <View style={[styles.row, styles.gap13]}>
            <Image source={{ uri: comment.img }} style={styles.proImg} />
            <View>
              <Text style={styles.commentUser}>{comment.userId}</Text>
              <Text style={styles.comment}>{comment.comment}</Text>
            </View>
          </View>
        ))}
        {/* Write comment */}
        <View style={[styles.row, styles.gap13]}>
          <Image source={{ uri: about.img }} style={styles.proImg} />
          <View>
            <TextInput
              placeholder="Add a comment..."
              placeholderTextColor={"#858585"}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  commentUser: {
    fontSize: 15,
    fontWeight: "600",
  },
  comment: {
    fontSize: 15,
  },

  likedByText: {
    fontSize: 15,
    fontWeight: "400",
  },
  boldText: {
    fontWeight: "bold",
  },
  proImg: {
    height: 29,
    width: 29,
    borderRadius: 29 / 2,
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 12,
    gap: 12,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  gap13: {
    gap: 13,
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
  },
});
