import { VerificationModal } from "@/components/verification-modal";
import { images } from "@/constants/images";
import { useClerkOAuth } from "@/hooks/use-clerk-oauth";
import { getClerkErrorMessage } from "@/lib/auth";
import { useSignUp } from "@clerk/expo";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, router, Stack } from "expo-router";
import { useState, type ReactNode } from "react";
import {
  ActivityIndicator,
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

type AuthScreenLayoutProps = {
  title: ReactNode;
  subtitle: string;
  primaryLabel: string;
  footerText: string;
  footerLinkText: string;
  footerHref: "/sign-in" | "/sign-up";
};

export function AuthScreenLayout({
  title,
  subtitle,
  primaryLabel,
  footerText,
  footerLinkText,
  footerHref,
}: AuthScreenLayoutProps) {
  const insets = useSafeAreaInsets();
  const { signUp, errors, fetchStatus } = useSignUp();
  const {
    signInWithApple,
    signInWithFacebook,
    signInWithGoogle,
    isLoading: isOAuthLoading,
    error: oauthError,
  } = useClerkOAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verificationVisible, setVerificationVisible] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const isSubmitting = fetchStatus === "fetching" || isVerifying;

  const handleSignUp = async () => {
    if (!email.trim()) {
      setAuthError("Please enter your email address.");
      return;
    }

    if (!password) {
      setAuthError("Please enter a password.");
      return;
    }

    setAuthError(null);

    const { error: createError } = await signUp.create({
      emailAddress: email.trim(),
      password,
    });

    if (createError) {
      setAuthError(
        errors.fields.password?.message ??
          errors.fields.emailAddress?.message ??
          getClerkErrorMessage(createError)
      );
      return;
    }

    const { error: sendError } = await signUp.verifications.sendEmailCode();

    if (sendError) {
      setAuthError(
        errors.fields.emailAddress?.message ?? getClerkErrorMessage(sendError)
      );
      return;
    }

    setVerificationVisible(true);
  };

  const handleVerifyCode = async (code: string) => {
    setIsVerifying(true);
    setAuthError(null);

    try {
      const { error: verifyError } = await signUp.verifications.verifyEmailCode({ code });

      if (verifyError) {
        throw verifyError;
      }

      await new Promise((resolve) => setTimeout(resolve, 50));

      const { error: finalizeError } = await signUp.finalize();

      if (finalizeError) {
        const message = getClerkErrorMessage(finalizeError);
        // Session might not exist for passwordless signup; proceed anyway if error is about missing session
        if (
          !message
            .toLowerCase()
            .includes("cannot finalize sign up without a created session")
        ) {
          throw finalizeError;
        }
      }

      setVerificationVisible(false);
      router.replace("/");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#020b18" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
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

        {title}
        <Text className="text-body-md text-secondary mt-2">{subtitle}</Text>

        <View className="relative mt-10">
          <View className="items-center" style={{ marginBottom: -14, zIndex: 10 }}>
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

          <View className="auth-input relative px-4 pb-4 pt-12">
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

        {authError ? (
          <Text className="text-body-sm text-error mt-3">{authError}</Text>
        ) : null}

        {oauthError ? (
          <Text className="text-body-sm text-error mt-3">{oauthError}</Text>
        ) : null}

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={primaryLabel}
          onPress={handleSignUp}
          disabled={isSubmitting || isOAuthLoading}
          className="mt-6 h-14 overflow-hidden rounded-full"
          style={{ experimental_backgroundImage: BUTTON_GRADIENT }}
        >
          <View className="h-full flex-row items-center justify-center px-6">
            {isSubmitting ? (
              <ActivityIndicator color="#f5f9ff" />
            ) : (
              <Text
                className="text-primary"
                style={{ fontFamily: "Poppins-Bold", fontSize: 16 }}
              >
                {primaryLabel}
              </Text>
            )}
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
            onPress={signInWithGoogle}
            disabled={isSubmitting || isOAuthLoading}
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
            onPress={signInWithFacebook}
            disabled={isSubmitting || isOAuthLoading}
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
            onPress={signInWithApple}
            disabled={isSubmitting || isOAuthLoading}
            className="auth-social-btn h-14 flex-row items-center justify-center gap-3 px-4"
          >
            <FontAwesome5 name="apple" size={22} color="#f5f9ff" />
            <Text className="text-body-md text-primary">
              Continue with Apple
            </Text>
          </Pressable>
        </View>

        <View className="mt-8 flex-row flex-wrap items-center justify-center">
          <Text className="text-body-md text-secondary">{footerText} </Text>
          <Link href={footerHref} asChild>
            <Pressable accessibilityRole="link">
              <Text className="text-body-md text-brand">{footerLinkText}</Text>
            </Pressable>
          </Link>
        </View>

        <View nativeID="clerk-captcha" />
      </ScrollView>

      <VerificationModal
        visible={verificationVisible}
        onClose={() => setVerificationVisible(false)}
        onVerify={handleVerifyCode}
        isLoading={isVerifying}
      />
    </KeyboardAvoidingView>
  );
}
