import { View } from "react-native";
import { Text } from "@/components/nativewindui/Text";
import { Image } from "expo-image";
import { BlurView } from "expo-blur";

export default function SteercodePlaceholder() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Image
        source={require('../public/images/steercode-bg.png')}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
        contentFit="cover"
      />
      <BlurView
        intensity={100}
        tint="dark"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <View className="gap-2.5 p-5 z-10">
        <Text className="text-xl font-bold text-center text-white">
          Something amazing starts here
        </Text>
        <Text className="text-sm text-center text-white/70">
          This is a SteerCode starting template. Ask AI to make any changes.
        </Text>
      </View>
    </View>
  );
}
