import { VerificationModal } from "@/components/verification-modal";
import { images } from "@/constants/images";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BUTTON_GRADIENT =
  "linear-gradient(to right, #0ea5ff 0%, #4dd8ff 100%)";

export default function SignInScreen() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [verificationVisible, setVerificationVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#020b18" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar style="light" />
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: insets.top + 8,
          paddingBottom: insets.bottom + 24,
          paddingHorizontal: 24,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          className="mb-6 h-10 w-10 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={28} color="#0ea5ff" />
        </Pressable>

        <Text className="text-h1 text-primary">
          Welcome <Text className="text-h1 text-accent">back!</Text>
        </Text>
        <Text className="text-body-md text-secondary mt-2">
          Log in to continue your learning journey. ✨
        </Text>

        <View className="relative mt-10">
          <View
            className="items-center"
            style={{ marginBottom: -48, zIndex: 10 }}
          >
            <Image
              source={images.mascotAuth}
              style={{ width: 200, height: 150 }}
              contentFit="contain"
              accessibilityLabel="Mascot"
            />
            <Ionicons
              name="star"
              size={14}
              color="#ffc857"
              style={{ position: "absolute", top: 8, left: 24 }}
            />
            <Ionicons
              name="star"
              size={12}
              color="#4dd8ff"
              style={{ position: "absolute", top: 20, right: 28 }}
            />
            <Ionicons
              name="sparkles"
              size={16}
              color="#4dd8ff"
              style={{ position: "absolute", top: 4, right: 56 }}
            />
          </View>

          <View className="auth-input px-4 pb-4 pt-12">
            <Text className="text-caption text-secondary">Email</Text>
            <View className="mt-1 flex-row items-center">
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="alex@gmail.com"
                placeholderTextColor="#94a3b8"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                className="flex-1 text-body-lg text-primary"
                style={{ fontFamily: "Poppins-Regular", paddingVertical: 4 }}
              />
              <Ionicons name="mail-outline" size={22} color="#0ea5ff" />
            </View>
          </View>

          <View className="auth-input mt-3 px-4 pb-4 pt-4">
            <Text className="text-caption text-secondary">Password</Text>
            <View className="mt-1 flex-row items-center">
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#94a3b8"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                className="flex-1 text-body-lg text-primary"
                style={{ fontFamily: "Poppins-Regular", paddingVertical: 4 }}
              />
              <Pressable
                onPress={() => setShowPassword((prev) => !prev)}
                accessibilityRole="button"
                accessibilityLabel={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color="#0ea5ff"
                />
              </Pressable>
            </View>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          <Pressable
            onPress={() => setRememberMe((prev) => !prev)}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: rememberMe }}
            className="flex-row items-center gap-2"
          >
            <View
              className="h-5 w-5 items-center justify-center rounded"
              style={{
                backgroundColor: rememberMe ? "#0ea5ff" : "transparent",
                borderWidth: 1,
                borderColor: rememberMe ? "#0ea5ff" : "#16324f",
              }}
            >
              {rememberMe ? (
                <Ionicons name="checkmark" size={14} color="#f5f9ff" />
              ) : null}
            </View>
            <Text className="text-body-sm text-secondary">Remember me</Text>
          </Pressable>

          <Pressable accessibilityRole="link">
            <Text className="text-body-sm text-brand">Forgot password?</Text>
          </Pressable>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Log In"
          onPress={() => setVerificationVisible(true)}
          className="mt-6 h-14 overflow-hidden rounded-full"
          style={{ experimental_backgroundImage: BUTTON_GRADIENT }}
        >
          <View className="h-full flex-row items-center justify-center px-6">
            <Text
              className="text-primary"
              style={{ fontFamily: "Poppins-Bold", fontSize: 16 }}
            >
              Log In
            </Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#f5f9ff"
              style={{ position: "absolute", right: 24 }}
            />
          </View>
        </Pressable>

        <View className="mt-8 flex-row items-center gap-3">
          <View className="auth-divider-line flex-1" />
          <Text className="text-caption text-secondary">or continue with</Text>
          <View className="auth-divider-line flex-1" />
        </View>

        <View className="mt-5 gap-3">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Continue with Google"
            className="auth-social-btn h-14 flex-row items-center justify-center gap-3 px-4"
          >
            <FontAwesome5 name="google" size={20} color="#f5f9ff" />
            <Text className="text-body-md text-primary">
              Continue with Google
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Continue with Facebook"
            className="auth-social-btn h-14 flex-row items-center justify-center gap-3 px-4"
          >
            <FontAwesome5 name="facebook" size={20} color="#0ea5ff" />
            <Text className="text-body-md text-primary">
              Continue with Facebook
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Continue with Apple"
            className="auth-social-btn h-14 flex-row items-center justify-center gap-3 px-4"
          >
            <FontAwesome5 name="apple" size={22} color="#f5f9ff" />
            <Text className="text-body-md text-primary">
              Continue with Apple
            </Text>
          </Pressable>
        </View>

        <View className="mt-8 flex-row flex-wrap items-center justify-center">
          <Text className="text-body-md text-secondary">
            Don&apos;t have an account?{" "}
          </Text>
          <Link href="/sign-up" asChild>
            <Pressable accessibilityRole="link">
              <Text className="text-body-md text-brand">Sign up</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>

      <VerificationModal
        visible={verificationVisible}
        onClose={() => setVerificationVisible(false)}
      />
    </KeyboardAvoidingView>
  );
}
