import { images } from "@/constants/images";
import { SUBJECTS } from "@/data/subjects";
import type { SubjectCode } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  type ImageSourcePropType,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const subjectDetails: Record<
  SubjectCode,
  {
    title: string;
    description: string;
    image: ImageSourcePropType;
    imageStyle: { width: number; height: number };
  }
> = {
  phy: {
    title: "Physics",
    description: "Explore laws of universe.",
    image: images.physics,
    imageStyle: { width: 118, height: 150 },
  },
  chem: {
    title: "Chemistry",
    description: "Discover matter and reactions.",
    image: images.chemistry,
    imageStyle: { width: 124, height: 200 },
  },
  math: {
    title: "Math",
    description: "Master equations, and problem solving.",
    image: images.maths,
    imageStyle: { width: 124, height: 88 },
  },
  bio: {
    title: "Biology",
    description: "Dive into life and ecosystems.",
    image: images.biology,
    imageStyle: { width: 118, height: 88 },
  },
};

export default function SubjectSelectionScreen() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return SUBJECTS;
    }

    return SUBJECTS.filter((subject) => {
      const details = subjectDetails[subject.code];
      const title = details?.title ?? "";

      return (
        subject.name.toLowerCase().includes(query) ||
        title.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, subjectDetails]);

  return (
    <View className="flex-1 bg-app">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: insets.top + 14,
          paddingBottom: insets.bottom + 28,
          paddingHorizontal: 24,
        }}
      >
        <View className="min-h-full">
          <View className="h-12 flex-row items-center justify-center">
            <Pressable
              onPress={() => router.back()}
              accessibilityRole="button"
              accessibilityLabel="Go back"
              className="absolute left-0 h-12 w-12 items-start justify-center"
            >
              <Ionicons name="chevron-back" size={36} color="#f5f9ff" />
            </Pressable>

            <Text className="text-h2 text-primary">Choose a subject</Text>
          </View>

          <View className="card mt-7 h-[86px] flex-row items-center rounded-[25px] px-7">
            <Ionicons name="search-outline" size={34} color="#94a3b8" />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              accessibilityLabel="Search subjects"
              placeholder="Search subjects"
              placeholderTextColor="#94a3b8"
              className="ml-4 flex-1 text-body-lg text-primary"
              style={{ fontFamily: "Poppins-Regular", paddingVertical: 0 }}
            />
          </View>

          <View className="mt-8 items-center">
            <Text className="text-body-lg text-secondary">
              Pick a subject to start learning
            </Text>
          </View>

          <View className="mt-6 gap-5">
            {filteredSubjects.length === 0 ? (
              <View className="items-center justify-center py-16">
                <Text className="text-h4 text-secondary">No subject found</Text>
              </View>
            ) : (
              filteredSubjects.map((subject) => {
              const details = subjectDetails[subject.code];
              if (!details) {
                return null;
              }

              return (
                <Pressable
                  key={subject.code}
                  accessibilityRole="button"
                  accessibilityLabel={`Choose ${details.title}`}
                  className="card h-[124px] flex-row items-center overflow-hidden rounded-[22px] px-4"
                >
                  <View className="w-[104px] items-center justify-center">
                    <Image
                      source={details.image}
                      style={details.imageStyle}
                      contentFit="contain"
                      accessibilityLabel={`${details.title} illustration`}
                    />
                  </View>

                  <View className="ml-3 flex-1 pr-2">
                    <Text
                      className="text-primary"
                      numberOfLines={1}
                      adjustsFontSizeToFit
                      minimumFontScale={0.84}
                      style={{
                        fontFamily: "Poppins-Bold",
                        fontSize: 24,
                        lineHeight: 31,
                      }}
                    >
                      {details.title}
                    </Text>
                    <Text
                      className="mt-2 text-body-sm text-primary"
                      numberOfLines={3}
                    >
                      {details.description}
                    </Text>
                  </View>

                  <View className="h-[52px] w-[52px] items-center justify-center rounded-full bg-brand">
                    <Ionicons name="chevron-forward" size={32} color="#f5f9ff" />
                  </View>
                </Pressable>
              );
              })
        
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
