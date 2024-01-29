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
  const data = postData.find(
    (post) => post.id == postId
  ); /* post datagaas хайна ямар нөгцөлд хайх юм бэ гэвэл post-ийн id нь дамжуулсан буюу дарсан 
  id тай тэнцүү байвал олоод ир гэсэн утга учиртай.  */

  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerBackTitleVisible: false });
  }, [navigation]);

  const likedBy =
    data.likedBy?.slice(0, 3) ||
    []; /* хайж олсон датаны likedBy гэсэн талбар байгаа. likedBy хиймэл likes гэсэн утгатай. 
  Тэгээд тэр likelsen хүмүүсээс эхний 3-ийг нь тасалж аваад likedBy рүү хийчихсэн. Яагаад 3-ийг тасалж байгаа вэ гэвэл likelsen хүмүүсийг бүгдийг нь харуулах боломжгүй
  багтахгүй 100 хүн байвал бүгдийг нь харуулах боломжгүй учраас  */

  const firstLike = likedBy.length > 0 ? likedBy[0].userId : "";
  const firstComment =
    data.comments?.length > 0
      ? data.comments[0]
      : {}; /*ер нь датагаа бэлдээл түүнийгээ ашиглаад байна гэсэн үг. бэлдсэн датанууд 
  файлуудын доод хэсэгт data.js нэртэй файл дотор байгаа болно. мэдээллүүдийг нь оруулж өгч байгаа уг мэдээллүүдийнхээ зарим хэсгийг ороод хараарай
  likedBy гэж нэрлэсэн байгаа. */
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
            {likedBy.map(
              (
                user /* дээрхээс 3-ийг нь тасдаж авсан датагаараа map хийгээд 3 зургийг хэвлэж байгаа.  */
              ) => (
                <Image source={{ uri: user.img }} style={styles.proImg} />
              )
            )}
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
        {/* view all comments */}

        <Link href="/modal" asChild>
          <TouchableOpacity>
            <Text style={styles.viewAll}>
              View all {data.comments.length} comments
            </Text>
          </TouchableOpacity>
        </Link>
        {/* Comments*/}
        {/* {data.comments?.map((comment) => (
          <View style={[styles.row, styles.gap13]}>
            <Image source={{ uri: comment.img }} style={styles.proImg} />
            <View>
              <Text style={styles.commentUser}>{comment.userId}</Text>
              <Text style={styles.comment}>{comment.comment}</Text>
            </View>
          </View>
        ))}
         Write comment 
        <View style={[styles.row, styles.gap13]}>
          <Image source={{ uri: about.img }} style={styles.proImg} />
          <View>
            <TextInput
              placeholder="Add a comment..."
              placeholderTextColor={"#858585"}
            />
          </View> 
        </View>*/}
      </View>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  viewAll: {
    color: "gray",
    fontSize: 15,
  },
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
// post-ийн дугаар нь ямар байх нь хамаагүй бүгдийг нь энэ [id].js файл барьж авч ажиллана. /post/1 ч бай 2 ч бай 3 ч бай энэ файл ажиллана.

//  одоо эхлээд view болон all гэсэн 2 товчыг гаргаж ирье. Яаг дор байрлана. Эхлээд энэ маань текст учраас текс гэсэн хашилтанд хийнэ.                 Өнгө нь арай өөр байдаг учраас өнгийг нь өөрчилхийн тулд стайл өгнө. Дараа нь энэ дардаг байх ёстой тэгэхээр дардаг юм өгнө гэсэн үг.
// Өөрөөр хэлбэл товчоор хүрээлнэ гэсэн үг үүнийгээ TouchableOpacity-ээ ашиглаж хийнэ.
// View all {data.comments.length} comments энд нуман хаалт нь дотор зүйлийн оронд уг нь 4 тоо тавьсан байсан. Гэхдээ 4-оос их байж бага ч байж магадгүй
// учраас бидэнд comments-ийн дата байгаа уг датаны урт буюу тоо нь байх ёстой учир ингэж бичнэ. Дараагийн хийх зүйл бол дарахад шилжих ёстой.
// шилжихдээ доороос нь гарч ирэхээр түүнийг хийдэг нэг сан байдаг. expo router modal гэж googlees хайгаад MODALS руу орно энэ нь ямар учиртай
// юм бэ гэвэл ерөнхийдөө дарангуут дэлгэц шинээр нээгдэж гарахыг хэлнэ. Энийг яаж хийх вэ гэхээр мдээж доод талд нь энийг маань ингэж ашиглана шүү гэсэн
// жишээ код байгаа.Бидэнд Stack гээд нэг layout файл байгаа. app дотор. энэ дотроо нэг шинэ хуудас үүсгэж байгаа гэсэн үг.
// modal гээд нэг файл үүсгэнэ. энэ бол дарангуут харагдах хуудас нь гэсэн үг. дараа нь modal шиг харагдана. Stack - ийн name орлоо, options дээр нь
// presentetion гэсэн утга нь дээр нь modal гээд тавьчихаар энэ хуудас модал шиг харагдана л гэсэн үг юм. Дараа нь Link буюу дарангуут үсэрнэ
// app дотор модал гээд шинэ хавтас үүсгэнэ. байсан кодийг нь хуулж тавиад, stack -тай холболтоо хийнэ. Энэ холболтыг app-ийн
// layout доторх stack -ууд дээрээ нэмж өгнө. Модал гэдэг файлыг модалаар үзүүлнээ гээд. наргиуншион хийчүүл болно. Үүнийг яаж хийдэг вэ гэвэл
// линк гэдгээр хүрээлдэг. бид коммент нь дээр дарахаар шилжүүлэх гээд байгаа энэ коммент маань id дотор байгаа. энэ дор бий. Дараа нь шилжих юмаа бичиж өгөх хэрэгтэй.
// модал руу шилжинэ гэж. href -ээр. Дотроо component агуулж байгаа тохиодолд asChild буюу дотроо хүүхэд компонент агуулж болно гээд тавьчихна.Одоо гарч ирж байна. Дараагийн
// алхамыг шинэ нуман хаалтанд яг дор бичиж харуулья.
