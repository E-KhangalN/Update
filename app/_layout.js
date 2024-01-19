import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Нүүр",
        headerStyle: {
          // backgroundColor: '#f4511e',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="movies"
        options={{
          title: "Киноны жагсаалт",
        }}
      />
      <Stack.Screen
        name="tic-tak"
        options={{
          title: "Тик так тоглоом",
        }}
      />
    </Stack>
  );
}
