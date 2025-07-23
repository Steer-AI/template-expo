import { View } from "react-native";
// import { Text } from "react-native";
import { Text } from "@/components/nativewindui/Text";

export default function SteercodePlaceholder() {
  return (
    <View className="flex-1 justify-center items-center gap-2.5 p-5">
      <Text className="text-xl font-bold text-center text-foreground">
        Something amazing starts here
      </Text>
      <Text className="text-sm text-center text-primary/50">
        This is a SteerCode starting template. Ask AI to make any changes.
      </Text>
    </View>
  );
}
