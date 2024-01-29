import { Tabs } from "expo-router/tabs";
import { AntDesign } from "@expo/vector-icons";

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
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
// layout гэдэг нь жишээ нь энэ файл бол home ийн layout. Энэ нь home гэдэг хавтасандотор байгаа бүх файлыг гадна талаар нь хүрээлж байгаа файлыг юм.
//
