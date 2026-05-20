import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
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
};

export function VerificationModal({ visible, onClose }: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleCodeChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 6);
    setCode(digits);

    if (digits.length === 6) {
      onClose();
      router.replace("/");
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

          <Pressable
            onPress={() => inputRef.current?.focus()}
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
            keyboardType="number-pad"
            maxLength={6}
            textContentType="oneTimeCode"
            autoComplete="one-time-code"
            style={{
              position: "absolute",
              opacity: 0,
              height: 1,
              width: 1,
            }}
          />

          <Pressable onPress={onClose} className="mt-6 items-center">
            <Text className="text-body-md text-brand">Cancel</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
