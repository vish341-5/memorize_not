import { CustomTabBar } from "@/components/custom-tab-bar";
import { useSubjectStore } from "@/store/subject";
import { useAuth } from "@clerk/expo";
import { Redirect, Tabs, usePathname, type Href } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SUBJECTS_ROUTE = "/subjects" as Href;

export default function TabLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const selectedSubject = useSubjectStore((state) => state.selectedSubject);
  const isHydrated = useSubjectStore((state) => state.isHydrated);
  const pathname = usePathname();

  if (!isLoaded || !isHydrated) {
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

  if (!selectedSubject && pathname === "/") {
    return <Redirect href={SUBJECTS_ROUTE} />;
  }

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: "#020b18" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Lessons",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
