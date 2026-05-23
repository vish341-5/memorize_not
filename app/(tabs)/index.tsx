import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeTabScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#020b18" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-h2 text-primary">Home</Text>
        <Text className="mt-2 text-center text-body-md text-secondary">
          Home screen coming soon.
        </Text>
      </View>
    </SafeAreaView>
  );
}
