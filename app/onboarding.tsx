import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BUTTON_GRADIENT =
  "linear-gradient(to right, #0ea5ff 0%, #4dd8ff 100%)";

const MASCOT_GLOW =
  "radial-gradient(circle at center, rgba(14, 165, 255, 0.28) 0%, transparent 72%)";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#020b18" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View className="flex-1 px-6">
        <View className="flex-row items-center gap-2.5 pt-1">
          <Image
            source={images.mascotLogo}
            style={{ width: 36, height: 36 }}
            contentFit="contain"
            accessibilityLabel="Memorize Not logo"
          />
          <Text className="text-h4 text-primary">Memorize Not</Text>
        </View>

        <Text className="text-h1 text-primary mt-8">
          Train your brain to{" "}
          <Text className="text-h1 text-accent">think deeper.</Text>
        </Text>

        <Text className="text-body-md text-secondary mt-4">
          Learn physics, chemistry, and math through interactive challenges,
          streaks, and guided reasoning.
        </Text>

        <View className="flex-1 mt-4 items-center justify-center">
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "85%",
              experimental_backgroundImage: MASCOT_GLOW,
            }}
          />
          <Image
            source={images.mascotWelcome}
            style={{ width: "100%", height: "100%" }}
            contentFit="contain"
            accessibilityLabel="Mascot teacher illustration"
          />
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Get Started"
          className="mb-2 h-14 overflow-hidden rounded-full"
          style={{
            experimental_backgroundImage: BUTTON_GRADIENT,
          }}
          onPress={() => router.replace("/sign-up")}
        >
          <View className="h-full flex-row items-center justify-center px-6">
            <Text
              className="text-primary"
              style={{ fontFamily: "Poppins-Bold", fontSize: 16 }}
            >
              Get Started
            </Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#f5f9ff"
              style={{ position: "absolute", right: 24 }}
            />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
