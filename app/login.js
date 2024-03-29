import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-gesture-handler";
const logoImg = require("../app/src/assets/logoinst.png");
import { Entypo } from "@expo/vector-icons";
import { signup } from "./src/service/authentication";

const Login = () => {
  /* TextInput дээр бичсэн юмаа хадгална. Sign up дарахад бүртгэл үүсгэнэ. Уг 2 TextInput дээр бичсэн зүйлсийг хадгалах ёстой. Хадгалахын тулд тус 
бүрд нь useState -ийг хэрэглэж хадгална. Тус бүрд нь state зарлая. Const -оор */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* 2.3    password -оо нууна гэсэн утгыг эхлээд үнэн байх учир анхны утгыг нь true болгов.
  hidePassword -оо доор аваачаад тавьчихна.  */
  const [hidePassword, setHidePassword] = useState(true);
  /* 2.2   Юу сэлгэх гээд байгаа юм бэ гэвэл password -ийн харагдах харагдахгүйг шийдэх гээд байгаа. Харагдах харагдахгүй passwordnii TextInput-ийн 
  secureTextEntry -ийн үнэн, худал шийдээд байгаа. Тэгэхээр бид энэ үнэн, худал гэсэн утгыг солихн хэрэгтэй. Товч нь дээр дарах үед тэр утгыг сольдог 
  байх хэрэгтэй. Тэгэхийн тулд бас л state ашиглана. */
  const togglePassword = () => {
    /*үүн дотор бид юу бичих ёстой вэ гэвэл hidePassword -ийг эсэргээр нь соль. */
    setHidePassword(!hidePassword);
  };
  /*3.1    Харин одоо sign up хийхэд бид нэг юм хийх ёстой. Үүнийхээ функцыг sign up гэж нэрлэе. Sign up дээр бид email, password 2 -оо барьж аваад 
цааш нь явуулах ёстой. Энэ 2 утга маань стэйт рүү орсон эсэхийг харцгаая. Үр дүнгээ console дээрээ харна жүү. */
  const handleSignup = async () => {
    // console.log(email, password);
    const response = await signup(email, password);
    console.log("response", response);
  };

  /*1.1  Харин одоо юм бичихэд уг 2 стэйтруугаа хадгалах түүнийг хэрхэн хийх талаар авч үзье.  */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Image source={logoImg} />
        <TextInput
          keyboardType="email-address"
          value={
            email
          } /* 1.3  Тэгээд 1.2 -оо value дээр нь тухайн email -ээ холбоод өгчихдөг. Өөрчлөгдсөн имэйл маань л харагдана гэсэн үг.  */
          onChange={(text) =>
            setEmail(text)
          } /* 1.2   Юм өөрчлөгдөх болгонд тухайн өөрчлөгдсөн текст нь ороод ирэх юм бол тэрийг email гэсэн стэйтрүү
        хадгална. */
          style={styles.input}
          placeholder="Phone number, email or username"
        />
        <View style={styles.input}>
          <TextInput
            value={password}
            onChange={(text) =>
              setPassword(text)
            } /* 2.2 болон 2.3 тэнд ч мөн энд ч хамаарна.   */
            secureTextEntry={
              hidePassword
            } /*passportiig password шиг нууцалж болдог болгохдоо secureTextEntry ашиглана. Үүнд үнэн утгыг онооход бичсэн зүйл
          нууцлагдаж харагдана. Харин худал утгыг тавьбал бичиж байгаа зүйл шууд ил тод харагдана. */
            placeholder="Password"
          />
          <TouchableOpacity onPress={togglePassword}>
            {/*2.1   onPress буюу нүд нь дээр дарахад togglePassword. Toggle гэдэг нь сэлгээд байдаг юмыг хэлж байгаа.  */}
            <Entypo name="eye" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          {/*3.2    Дарах юм бол signup хийнэ гэсэн үг.*/}
          <Text style={styles.btnText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  btnText: {
    color: "#FFFFFF",
  },
  main: {
    padding: 25,
    gap: 9,
  },
  container: {
    paddingTop:
      StatusBar.currentHeight /* android дээрх статусбарыг янзлахдаа*/,
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
  button: {
    backgroundColor: "#1877F2",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  logo: {
    alignSelf:
      "center" /*alignSelf гэхээр зөвхөн тухайн item -ийг яаж байрлахыг зааж өгдөг. Харин alignItems гэхээр бөөнөөр нь яаж байрлахыг
        зааж байсан.  */,
  },
  input: {
    backgroundColor: "#EEEEEE",
    borderColor: "#C5C5C5",
    borderWidth: 1,
    color: "#848484",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
/*хард хэр их юм хадалалахыг хэлнэ. рам гэдэг нь зэрэг олон юм оруулж ажлуулах. сепү гэдэг нь i3 ,... хэлж байгаа. */
/* 4.1   login дахь процессыг тайлбарлая. Цаанаа бидний оруулсан хэрэглэгчийн нэвтрэх нэр болон пасспортыг нэг газар хадгална. 
 бүртгүүлэнгүүт дараа нь өөр утаснаас ч юм уу нэвтрэхэд нөгөө хадгалсан газраас маань авч ирээд энэ хүн маань 
 зөв пасспорт оруулж байна уу гэж шалгах хэрэг гарна. Тэр процессыг шалгахад backend гэсэн ойлголт орж ирдэг.
 front-end гэдэг бидний хийж байсан хүмүүсийн нүдэнд харагдах хэсэг. Тэр APIs гээд нэг зөөгч буюу хүсэлтүүд (гар утасны апп гэх мэтээр бол) дамжаад backend буюу гал тогоо руу очно. Гал тогоо
 хоол хийхдээ хөргөгч буюу database ээс мэдээллүүдээ буюу хүнсээ авч ирнэ. Тэгж байгаад хоолоо хийнэ. 
 өмнөх шат дамжлагуудаа дамжаад буцаад хоол идэх газар луугаа буюу frontend рүү ирнэ. 
 өөрөөр хэлбэл нэвтрэх нэр болон пасспортыг чинь database рүү хийнэ гэж ойлгож болно. ахиад нэвтрэхэд backendees мэдээлэл олчихлоо гээд одоо үүнийг нэвтрүүли гэсэн юм болдог гэсэн үг. 
 4.2  Googliin firebase гээд backend -ийн кодыг нэг бүртчлэн бичихгүйгээр бичээд бэлдчихсэн зүйлийг ашиглаад аппаа холбоод нэвтрээд датагаа холбоод гэсэн тийм зүйл байгаа. 
 Бид энэ удаа үүний нэвтрэлтийг ашиглана (aunthentication).  Эхлээд expo (гар утасны апп дээрээ firebase) -ийг холбоно гэсэн үг. Холбоход  хэд хэдэн алхам бий. expo firebase гэж хайж ороод алхамуудаа гүйцэтгэнэ. */
