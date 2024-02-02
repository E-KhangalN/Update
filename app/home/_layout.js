import { Tabs } from "expo-router/tabs";
import {
  AntDesign,
  Feather,
} from "@expo/vector-icons"; /* icon -ийг оруулахдаа googlees expo icon гэж хайгаад эхний руу ороод хүссэн icon -оо сонгож дараад 
iconoo import хийж оруулна өөрөөр хэлбэл import the icon family гэдгийг хуулж аваад 
энд тавьна. 
Дараа нь гөөглэрүүгээ буцаж ороод 2 дахь зүйл буюу render the components хэсгийг хуулаад iconoo тавих газраа очоод paste хийчихнэ. Ингээд icon -ийг оруулж чаддаг боллоо.  */
import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
export default function HomeLayout() {
  // хэт урт бичиглэл болох гээд байвал аливаа бичиглэлийг энд компонент болгоод биччихэж болдог энд хувьсагч зарлаж кодоо бичиж байгаад тухайн кодоо харуулах гэж байгаа
  // хэсэгтээ очиж байгаад хувьсагчийнхаа нэрийг бичээд харуулчиж болдог. Доор үйлдэл.
  const dmIcon = (
    /* нэг зүйл дарахад тухайн хуудас руугаа үсэрдэг зүйлийг хийхдээ Link -ийг хэрэглэнэ. Өөрөөр хэлбэл Link-ээр хүрээлэнэ. Одоо би icon дээр дарахад үсэргэмээр байгаа 
  учир уг iconoo linkeer хүрээлэнэ гэсэн үг. Линк дээрээ asChild гэсэн юм тодорхойлж өгдөг дотроо компонент функц ч ашиглачихсан учраас үүнийхээ урд    hred={" хаашаа шилжүүлэх гэж байгаа замаа бичиж өгдөг "}.
  Би үүнийг app -> direct message рүү шилжүүлэх гэж байгаад тэгэхдээ href="{/direct message}" гээд биччихнэ. Ингээд шилжчихнэ. 
   */
    <Link>
      <TouchableOpacity style={styles.dmIcon}>
        <Feather name="send" size={24} color="black" />
      </TouchableOpacity>
    </Link>
  );
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () =>
            dmIcon /* Толгой хэсгийн баруун талд юу харуулах вэ гэдгийг энд бичнэ.  */,
          title: "Нүүр хуудас",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профайл",
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  dmIcon: {
    paddingRight: 5 /* баруун талаас padding авна 5 px -ээр*/,
  },
});
// layout гэдэг нь жишээ нь энэ файл бол home ийн layout. Энэ нь home гэдэг хавтасандотор байгаа бүх файлыг гадна талаар нь хүрээлж байгаа файлыг юм.
// Аливаа зүйлийг дуудахад ижил нэртэй маш олон сонголт гарч ирдэг тэр нь ямар учиртай
