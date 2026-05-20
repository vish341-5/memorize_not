import { AuthScreenLayout } from "@/components/auth-screen-layout";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

export default function SignUpScreen() {
  return (
    <>
      <StatusBar style="light" />
      <AuthScreenLayout
        title={
          <Text className="text-h1 text-primary">
            Create your <Text className="text-h1 text-accent">account</Text>
          </Text>
        }
        subtitle="Start your learning journey today ✨"
        primaryLabel="Sign Up"
        footerText="Already have an account?"
        footerLinkText="Log in"
        footerHref="/sign-in"
      />
    </>
  );
}
