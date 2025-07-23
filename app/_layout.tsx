import "../global.css";

import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { PortalHost } from "@rn-primitives/portal";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { KeyboardProvider } from "react-native-keyboard-controller";
import { ThemeProvider } from "@react-navigation/native";

import { useColorScheme, useInitialAndroidBarSync } from "@/lib/useColorScheme";
import { NAV_THEME } from "@/theme";
import { Stack } from "expo-router";
import { useEffect } from "react";

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from "expo-router";

export default function RootLayout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  // const { colorScheme, isDarkColorScheme } = { colorScheme: "light", isDarkColorScheme: false };

  console.log("colorScheme", colorScheme, isDarkColorScheme);

  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? "light" : "dark"}`}
        style={isDarkColorScheme ? "light" : "dark"}
      />

      <ActionSheetProvider>
        {/* <KeyboardProvider statusBarTranslucent navigationBarTranslucent> */}
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <ThemeProvider value={NAV_THEME[colorScheme]}>
                <RootNavigator />
                <PortalHost />
              </ThemeProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        {/* </KeyboardProvider> */}
      </ActionSheetProvider>
    </>
  );
}

function RootNavigator() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
