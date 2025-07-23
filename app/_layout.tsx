import "../global.css";

import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { PortalHost } from "@rn-primitives/portal";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider as NavigationTheme } from "@react-navigation/native";
import ThemeProvider from "@/providers/ThemeProvider";

import { useColorScheme, useInitialAndroidBarSync } from "@/lib/useColorScheme";
import { NAV_THEME } from "@/theme";
import { Stack } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? "light" : "dark"}`}
        style={isDarkColorScheme ? "light" : "dark"}
      />

      <ActionSheetProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <ThemeProvider>
                <NavigationTheme value={NAV_THEME[colorScheme]}>
                  <RootNavigator />
                  <PortalHost />
                </NavigationTheme>
              </ThemeProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
      </ActionSheetProvider>
    </>
  );
}

function RootNavigator() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
