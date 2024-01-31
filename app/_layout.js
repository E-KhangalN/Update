import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false /* энэ true болохоороо бүх зүйлсийн толгой хэсэг харагдаад байгаа уг нь зөвхөн Comments хэсгийн толгойг
        л харуулах хэрэгтэй байгаа. уг толгойг маань харуулмаар байгаа хэсэг одоогоор true болгочихоор файлын нэрээрээ орж ирнэ. 
        өөрөөр хэлбэл нэрийг солих хэрэгтэй. солихдоо title гэж байгаад нэрийг сольчихно. title:"Comments" гэх мэтчилэн.*/,
      }}
    >
      <Stack.Screen
        name="post/[id]"
        options={{
          title: "Posts",
        }}
      />
      <Stack.Screen
        name="comments"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          title: "Comments",
        }}
      />
    </Stack>
  );
}
