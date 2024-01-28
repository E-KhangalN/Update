import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="post/[id]"
        options={{
          title: "Posts",
        }}
      />
    </Stack>
  );
}
