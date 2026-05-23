import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  type LayoutChangeEvent,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TabIconName = keyof typeof Ionicons.glyphMap;

const TAB_ICON_BY_ROUTE: Record<string, TabIconName> = {
  index: "home",
  learn: "book-outline",
  profile: "person-outline",
};

const TAB_LABEL_BY_ROUTE: Record<string, string> = {
  index: "Home",
  learn: "Lessons",
  profile: "Profile",
};

const ACTIVE_CIRCLE_SIZE = 46;
const TAB_BAR_HORIZONTAL_PADDING = 10;

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const [barWidth, setBarWidth] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const tabWidth = useMemo(() => {
    if (barWidth === 0) {
      return 0;
    }

    return (barWidth - TAB_BAR_HORIZONTAL_PADDING * 2) / state.routes.length;
  }, [barWidth, state.routes.length]);

  useEffect(() => {
    if (tabWidth === 0) {
      return;
    }

    Animated.spring(translateX, {
      toValue:
        TAB_BAR_HORIZONTAL_PADDING +
        tabWidth * state.index +
        (tabWidth - ACTIVE_CIRCLE_SIZE) / 2,
      damping: 22,
      stiffness: 180,
      mass: 0.8,
      useNativeDriver: true,
    }).start();
  }, [state.index, tabWidth, translateX]);

  const handleLayout = (event: LayoutChangeEvent) => {
    setBarWidth(event.nativeEvent.layout.width);
  };

  return (
    <View
      pointerEvents="box-none"
      style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 8) }]}
    >
      <View
        onLayout={handleLayout}
        className="mx-5 h-[72px] rounded-[26px] border border-[#133a67] bg-[#03112a]/95 px-[10px]"
      >
        {tabWidth > 0 ? (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.activeCircle,
              {
                transform: [{ translateX }],
              },
            ]}
          />
        ) : null}

        <View className="h-full flex-row items-center">
          {state.routes.map((route, index) => {
            const descriptor = descriptors[route.key];
            const isFocused = state.index === index;
            const label = TAB_LABEL_BY_ROUTE[route.name] ?? route.name;
            const iconName = TAB_ICON_BY_ROUTE[route.name] ?? "ellipse-outline";

            const handlePress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const handleLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={descriptor.options.tabBarAccessibilityLabel}
                testID={descriptor.options.tabBarButtonTestID}
                onPress={handlePress}
                onLongPress={handleLongPress}
                style={[styles.tabButton, { width: tabWidth || undefined }]}
              >
                <View className="h-[54px] items-center justify-center">
                  <Ionicons
                    name={iconName}
                    size={isFocused ? 29 : 27}
                    color={isFocused ? "#eaffff" : "#a996ff"}
                  />

                  {!isFocused ? (
                    <Text className="mt-0.5 text-caption text-[#a996ff]">
                      {label}
                    </Text>
                  ) : null}
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#020b18",
  },
  activeCircle: {
    position: "absolute",
    top: 8,
    width: ACTIVE_CIRCLE_SIZE,
    height: ACTIVE_CIRCLE_SIZE,
    borderRadius: ACTIVE_CIRCLE_SIZE / 2,
    backgroundColor: "#10b7ff",
    borderWidth: 1,
    borderColor: "#55e6ff",
    shadowColor: "#16c8ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.86,
    shadowRadius: 16,
    elevation: 10,
  },
  tabButton: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
