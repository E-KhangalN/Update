// Messenjer лүү ороход шууд харагддаг хэсэг буюу нүүр хуудасын хэсэг энд байрлана. Үүнийг харуулахыг индэкс дотроо бичнэ. Энэ. Товчлол нь rnfes.
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
// Chat screen
const Dm = () => {
  {
    /* хамгийн түрүүнд дээд хэсгийг гаргаж ирье. буцах товч байдаг толгой хэсэг. Profile хэсэг дээр толгой хэсгийг нь харуулахдаа бид дараах 
      кодыг ашиглаж байсан. Тэр кодоо л ашиглачихна гэсэн үг. Мөн хэрэглэж байгаа бүх зүйлсээ import хийх ёстой. Шинэ хувьсагч ашиглах гэж байгаа бол шинэ
      хувьсагчаа зарлахаа мартаж болохгүй мөн шинэ хувьсагчийг return -ийн өмнө зарлаж байгааг анзаарах хэрэгтэй. Бас дээд талын хэсгийг гаргаж ирэх үйлдлээ хийхдээ 
      return -ийн өмнө бичиж байгааг анзаарах хэрэгтэй яагаад ингэж байгаа вэ гэвэл return дотор дэлгэцэнд харуулах зүйлсийг л бичдэг болохоор тэр. 
       */
  }
  const navigation =
    useNavigation(); /*энэ мөрний код хуудас шилжих код. Яг дор байрлах код хуудас шилжээд ороод ирэхэд ажиллана уг кодыг дотор нь тайлбарлая.*/
  // navigation буюу хуудас өөрчлөгдөх бүрт доторхи кодыг ажиллуулна.

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitleVisible: true,
      headerBackTitle: "Direct",
      headerTitle: "",
      headerRight: () => (
        <View style={styles.row}>
          <TouchableOpacity>
            <AntDesign name="videocamera" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="pencil-square-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    }); /* энэ код нь эхлээд navigation -ийнхээ options -ийг тохируулж байгаад таслалын урд 
    талынх буюу headerShown: true энэ нь дэлгэцийн дээд талын хэсгийг харуул гэж байгаа билээ. headerBackTitleVisible: true нь ард талын backtitle -ийг нь харуул
    гэж байна. Яг үүний дараагийн үйлдэл нь backtitle -ийн нэрийг солих үйл явц явагдаж байна. Нэрийг солихдоо headerBackTitle:" өгөх нэрээ энд бичнэ " гэж солино. 
    Харин дээд хэсгийн голд харагддаг бичгийг солихдоо headerTitle:" өгөх нэрээ энд бичнэ " гэж солино. Гэвч хийх гэж байгаа зүйл дээр маань тийм нэр байхгүй учир тийм нэр сольхоос 
    өмнө анх файлын нэрээр орж ирдэг тэрийг байхгүй болгохын тулд нэр өгөх хэсгээ хоосон үлдээчихвэл юм үл үзэгдэнэ. Гол нь срингээ наах хэрэгтэй тэгэхгүй бол алдаа заана. 
    Харин одоо баруун талд нь байрлах icon-уудыг оруулья. icon -oo олохдоо мөн л гүүглээсээ expo icon гэж хайна. Оруулахдаа
     headerRight: () => ( <View> энд оруулах зүйлээ бичиж өгнө </View> )   */
  }, [navigation]);
  return (
    <View>
      <Text> fhfks;ldmfdljg;dlgd</Text>
    </View>
  );
};

export default Dm;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row" /* чиглэл нь хэвтээ байх ёстой. */,
    gap: 8 /* дотор нь байгаа элементүүдийн дотор нь зай авч байгаа */,
  },
});
