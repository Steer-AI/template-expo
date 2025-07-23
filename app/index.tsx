import SteercodePlaceholder from "@/components/steercode-placeholder";

export default function Index() {
  return (
    // Replace this placeholder with the app code
    <SteercodePlaceholder />
  );
}

// import { useHeaderHeight } from "@react-navigation/elements";
// import { Icon } from "@roninoss/icons";
// import { FlashList } from "@shopify/flash-list";
// import { cssInterop } from "nativewind";
// import * as React from "react";
// import { Linking, useWindowDimensions, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// import { ActivityIndicator } from "@/components/nativewindui/ActivityIndicator";
// import { AdaptiveSearchHeader } from "@/components/nativewindui/AdaptiveSearchHeader";
// import { Badge } from "@/components/nativewindui/Badge";
// import { Button } from "@/components/nativewindui/Button";
// import { Checkbox } from "@/components/nativewindui/Checkbox";
// import { Picker } from "@/components/nativewindui/Picker";
// import { ProgressIndicator } from "@/components/nativewindui/ProgressIndicator";
// import { SearchInput } from "@/components/nativewindui/SearchInput";
// import { Slider } from "@/components/nativewindui/Slider";
// import { Stepper } from "@/components/nativewindui/Stepper";
// import { Text as NativewindText } from "@/components/nativewindui/Text";
// import { TextField } from "@/components/nativewindui/TextField";
// import { Toggle } from "@/components/nativewindui/Toggle";
// import { Toolbar } from "@/components/nativewindui/Toolbar";

// import { Text } from "@/components/nativewindui/Text";
// import { useColorScheme } from "@/lib/useColorScheme";

// cssInterop(FlashList, {
//   className: "style",
//   contentContainerClassName: "contentContainerStyle",
// });

// export default function Screen() {
//   return (
//     <FlashList
//       contentInsetAdjustmentBehavior="automatic"
//       keyboardShouldPersistTaps="handled"
//       data={COMPONENTS}
//       estimatedItemSize={200}
//       className="bg-background"
//       contentContainerClassName="py-4"
//       keyExtractor={keyExtractor}
//       ItemSeparatorComponent={renderItemSeparator}
//       renderItem={renderItem}
//       ListEmptyComponent={
//         COMPONENTS.length === 0 ? ListEmptyComponent : undefined
//       }
//     />
//   );
// }

// function ListEmptyComponent() {
//   const insets = useSafeAreaInsets();
//   const dimensions = useWindowDimensions();
//   const headerHeight = useHeaderHeight();
//   const { colors } = useColorScheme();
//   const height = dimensions.height - headerHeight - insets.bottom - insets.top;

//   return (
//     <View
//       style={{ height }}
//       className="flex-1 items-center justify-center gap-1 px-12"
//     >
//       <Icon name="file-plus-outline" size={42} color={colors.grey} />
//       <Text variant="title3" className="pb-1 text-center font-semibold">
//         No Components Installed
//       </Text>
//       <Text color="tertiary" variant="subhead" className="pb-4 text-center">
//         You can install any of the free components from the{" "}
//         <Text
//           onPress={() => Linking.openURL("https://nativewindui.com")}
//           variant="subhead"
//           className="text-primary"
//         >
//           NativewindUI
//         </Text>
//         {" website."}
//       </Text>
//     </View>
//   );
// }

// type ComponentItem = { name: string; component: React.FC };

// function keyExtractor(item: ComponentItem) {
//   return item.name;
// }

// function renderItemSeparator() {
//   return <View className="p-2" />;
// }

// function renderItem({ item }: { item: ComponentItem }) {
//   return (
//     <Card title={item.name}>
//       <item.component />
//     </Card>
//   );
// }

// function Card({
//   children,
//   title,
// }: {
//   children: React.ReactNode;
//   title: string;
// }) {
//   return (
//     <View className="px-4">
//       <View className="gap-4 rounded-xl border border-border bg-card p-4 pb-6 shadow-sm shadow-black/10 dark:shadow-none">
//         <Text className="text-foreground text-center text-sm font-medium tracking-wider opacity-60">
//           {title}
//         </Text>
//         {children}
//       </View>
//     </View>
//   );
// }

// const COMPONENTS: ComponentItem[] = [
//   { name: "ActivityIndicator", component: ActivityIndicator },
//   { name: "AdaptiveSearchHeader", component: AdaptiveSearchHeader },
//   { name: "Badge", component: Badge },
//   { name: "Button", component: Button },
//   { name: "Checkbox", component: Checkbox },
//   { name: "Picker", component: Picker },
//   { name: "ProgressIndicator", component: ProgressIndicator },
//   { name: "SearchInput", component: SearchInput },
//   // { name: "Slider", component: Slider },
//   { name: "Stepper", component: Stepper },
//   { name: "Text", component: NativewindText },
//   { name: "TextField", component: TextField },
//   { name: "Toggle", component: Toggle },
//   { name: "Toolbar", component: Toolbar },
// ];
