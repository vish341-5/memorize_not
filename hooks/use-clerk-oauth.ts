import { getClerkErrorMessage } from "@/lib/auth";
import { useSSO } from "@clerk/expo";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";

type OAuthStrategy = "oauth_google" | "oauth_facebook" | "oauth_apple";

export function useClerkOAuth() {
  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInWith = useCallback(
    async (strategy: OAuthStrategy) => {
      setIsLoading(true);
      setError(null);

      try {
        const { createdSessionId, setActive } = await startSSOFlow({
          strategy,
          redirectUrl: Linking.createURL("/"),
        });

        if (createdSessionId && setActive) {
          await setActive({ session: createdSessionId });
          router.replace("/");
        }
      } catch (err) {
        setError(getClerkErrorMessage(err));
      } finally {
        setIsLoading(false);
      }
    },
    [router, startSSOFlow]
  );

  return {
    error,
    isLoading,
    signInWithApple: () => signInWith("oauth_apple"),
    signInWithFacebook: () => signInWith("oauth_facebook"),
    signInWithGoogle: () => signInWith("oauth_google"),
  };
}
