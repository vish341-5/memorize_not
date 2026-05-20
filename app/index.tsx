import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#020b18" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-h2 text-primary text-center">
          Welcome to Memorize Not!
        </Text>

        <Link href="/onboarding" asChild>
          <Pressable
            accessibilityRole="link"
            accessibilityLabel="Open onboarding screen"
            className="mt-8 rounded-full border border-app px-6 py-3"
          >
            <Text className="text-body-lg text-brand">View Onboarding</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
