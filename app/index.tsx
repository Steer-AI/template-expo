import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        Something amazing starts here
      </Text>
      <Text style={{ fontSize: 14, textAlign: "center" }}>
        This is a SteerCode starting template. Ask AI to make any changes.
      </Text>
    </View>
  );
}
