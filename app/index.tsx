import { useAuth } from "@clerk/expo";
import { Link, Redirect, router } from "expo-router";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { isSignedIn, isLoaded, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/sign-in");
  };

  if (!isLoaded) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#020b18" }}>
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator color="#0ea5ff" size="large" />
        </View>
      </SafeAreaView>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

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

        <Pressable
          onPress={handleSignOut}
          accessibilityRole="button"
          accessibilityLabel="Sign out and return to login"
          className="mt-4 rounded-full bg-white/10 px-6 py-3"
        >
          <Text className="text-body-lg text-primary">Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
