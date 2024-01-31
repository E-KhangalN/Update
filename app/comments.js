import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import Comment from "./src/components/profile/Comment";
import { StatusBar } from "expo-status-bar";
import { about, postData } from "../data";
import { useEffect } from "react";
export default function Modal() {
  /* navigation гэдэг нь хуудас шинжилтийг зохицуулж байгаа зүйлийг хэлж байгаа */
  const navigation = useNavigation();

  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();

  const params = useLocalSearchParams();
  // Үзүүлэх ёстой постын дугаар
  const postId = params.Id;

  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна. Хуудас өөрчлөгдөхөөр энийгээ чагнаж байгаад толгой хэсгийг нь харуулаад
  // ард талын товчыг нь харуулахгүй болгочихдог. Мөн бүх зүйлээ import хийх ёстой.
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  // Постын датаг id-аар хайж олно.
  const data = postData.find(
    (post) => post.id == postId
  ); /* 3 тэнцүү байвал бүх юм нь адилхан утга нь болон төрөл нь адил. Стринг байвал стринг байдаг.
  манай дамжуулж байгаа id тоо утгатай. postId буюу манай дамжуулсан утга стринг болохоор 3 тэнцүүгээр тэнцэхгүй алдаа зааж байсан гэсэн үг. */
  const comments = data.comments;
  console.log("comm", comments);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* ScrollView -ийн дотор нь байгаа зүйлсэд стайл өгье гэвэл style-ийнхаа урд contentContainer 
      гэж бичнэ.  */}
        {/* Comments*/}
        {comments.map(
          /* мап гэдэг бол функц. нэг алхам дээр ажлах функц. тэд нь цуглаад массив болдог. шинэ массив үүсгэдэг давталт. */
          (
            comment /*яг энэ сумны ард нуман хаалт тавих юм бол return гэж дараа нь заавал бичих ёстой. харин нуман хаалт тавихгүй бол 
      return бичих шаардлагагүй код маань аан энийг л буцаах юм байна гэж ойлгоод түнийгээ буцаадаг байна.*/
          ) => (
            <Comment
              data={comment}
            /> /* ямар нэгэн их бичиглэлийг нэг хэсгийг нь компонентод хийчихвэл дуртай үедээ дуудаад хэзээ ч ашиглаж болно. код ч эмх цэгцтэй. 
          харин бүх компонентээ зөв нэрлээд src -iin component хавтасруу хийх ёстой. Үгүй бол төөрнө.  */
          )
        )}
        {/* Write comment  */}
        <View style={[styles.row, styles.gap13]}>
          <Image source={{ uri: about.img }} style={styles.proImg} />
          <View>
            <TextInput
              placeholder="Add a comment..."
              placeholderTextColor={"#858585"}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 10,
  },
  /* энэ view гэх мэт зүйлсийн элемент бүр дээр жигд зай авч байна л гэсэн үг. */
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
  proImg: {
    height: 29,
    width: 29,
    borderRadius: 29 / 2,
  },
  commentUser: {
    fontSize: 15,
    fontWeight: "600",
  },
  comment: {
    fontSize: 15,
  },
});

// Кодонд алдаа гарвал шалгаж болохоор бүх зүйлээр яг аль хэсэг нь ажиллахгүй байна гэдгийг жишээ нь background өгдөг ч юм уу текст ч бичиж үздэг юм
// уу гэх мэтээр сайн шалгах хэрэгтэй.
