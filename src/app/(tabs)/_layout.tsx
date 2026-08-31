import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import { Colors } from "@/constants/theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
        }}
      />
    </Tabs>
  );
}
