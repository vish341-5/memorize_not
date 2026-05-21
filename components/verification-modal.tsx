import { getClerkErrorMessage } from "@/lib/auth";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

type VerificationModalProps = {
  visible: boolean;
  onClose: () => void;
  onVerify: (code: string) => Promise<void>;
  isLoading?: boolean;
};

export function VerificationModal({
  visible,
  onClose,
  onVerify,
  isLoading = false,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<TextInput>(null);

  const focusInput = () => {
    if (inputRef.current?.isFocused()) {
      inputRef.current.blur();
      setTimeout(() => inputRef.current?.focus(), 50);
      return;
    }

    inputRef.current?.focus();
  };

  useEffect(() => {
    if (visible) {
      setCode("");
      setError(null);
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleCodeChange = async (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 6);
    setCode(digits);
    setError(null);

    if (digits.length === 6 && !isLoading) {
      try {
        await onVerify(digits);
      } catch (err) {
        setCode("");
        setError(getClerkErrorMessage(err));
      }
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(2, 11, 24, 0.75)" }}
          onPress={onClose}
        />
        <View className="rounded-t-3xl border-t border-app bg-surface px-6 pb-8 pt-6">
          <Text className="text-h3 text-primary text-center">
            Check your email
          </Text>
          <Text className="text-body-md text-secondary mt-3 text-center">
            We sent you a verification code. Enter the 6-digit code below to
            continue.
          </Text>

          {error ? (
            <Text className="text-body-sm text-error mt-3 text-center">
              {error}
            </Text>
          ) : null}

          <Pressable
            onPress={focusInput}
            className="mt-6 flex-row justify-between gap-2"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <View
                key={index}
                className="auth-input h-12 flex-1 items-center justify-center"
              >
                <Text
                  className="text-h4 text-primary"
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  {code[index] ?? ""}
                </Text>
              </View>
            ))}
          </Pressable>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleCodeChange}
            keyboardType="numeric"
            showSoftInputOnFocus={true}
            blurOnSubmit={false}
            maxLength={6}
            editable={!isLoading}
            autoCorrect={false}
            textContentType="oneTimeCode"
            autoComplete="one-time-code"
            style={{
              position: "absolute",
              opacity: 0,
              height: 1,
              width: 1,
            }}
          />

          {isLoading ? (
            <ActivityIndicator className="mt-6" color="#0ea5ff" />
          ) : (
            <Pressable onPress={onClose} className="mt-6 items-center">
              <Text className="text-body-md text-brand">Cancel</Text>
            </Pressable>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
