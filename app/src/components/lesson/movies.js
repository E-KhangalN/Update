import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Movie from "../lesson/Movie";
const Movies = () => {
  const movies = [
    {
      name: "Avengers",
      desc: "Superheroes team up to save the world.",
      img: require("../../assets/iimg/image7.jpg"),
    },
    {
      name: "Spider-Man: Into the Apider-Verse",
      desc: "An animated adventure with multiple Spider-People.",
      img: require("../../assets/iimg/image8.jpg"),
    },
    {
      name: "Iron man 3",
      desc: "Iron Man 3 is 2013 American superhero film based on the Marvel Comics character Oron Man",
      img: require("../../assets/iimg/image9.jpg"),
    },
    {
      name: "Thor: Love and Thunder",
      desc: "Thor enlisth the help of Valkyrie. Korg and exgirlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
      img: require("../../assets/iimg/image10.jpg"),
    },
  ];
  return (
    <ScrollView
      horizontal
      pagingEnabled
      contentContainerStyle={styles.container}
    >
      {movies.map((movie) => (
        <movie name={movie.name} desc={movie.desc} img={movie.img} />
      ))}
      <Movie />
    </ScrollView>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
// ер нь код бичихэд бараг 100 хувь google -хайх ажил гэж ойлгож болно. Хэрхэн яаж гүүглээс хайх вэ гэвэл жишээ одоо би
// react-native сурч байна өөрөөр хэлбэл юу сурч байгаа юм тэр кодныхоо нэрийг түрүүлж бичиж байгаад хойноос юу яаг хиймээр
// байгаа юм бэ түүнийгээ бичээд өгчихөөр яаж хэрэглэх гэх мэт бүх мэдээлэл нь гараад ирнэ. Үүнд англи хэлгүй бол код ч явахгүйь
// юу ч явахгүй гэж ойлгож болно.

/* уг утасны апп нь доошоо скролддоггүй өөрөөр хэлбэл доош дээш нь гүйлгэж болдоггүй. 
    үүнийг хийхдээ өөр код нэмж өгдөг уг view -ийгээ scrolView гэсэн код ашиглаж бичнэ. 
    Нэмэлтээр үүнийг тавьж өгсөн яагаад вэ гэвэл алдаа заасан ямар алдаа юм бэ гэвэл  хэрвээ scrol дээр алигн-айтем ашиглаж гоё
    тэгшилмээр байгаа юм бол уг стайлыг соntentContainerStyle гэж тавих ёстой гэсэн.
    ScrollView horizontal гэж бичвэл энэ нь чиглэлийг нь хэвтээ болгож өгдөг. Гэхдээ энэ нь төгсгөл дээрээ ScrollView -үүнийгээ л авдаг. 
    
    
    
    return дотор дэлгэцэнд яг юу харуулмаар байгаагаа л бичдэг. 
  */

// дээрх киногоо map - аар давтая. Нэгдүгээр movies гэсэн дата зарлана. Үүний дата нь оббект байх ёстой юу массив байх \
// ёстой юу гэвэл массив байх ёстой. Доод талд нь нэг ширхэг киноны мэдээлэл тавих ёстой. Жишээ нь нэгдүгээрт avengers
//
