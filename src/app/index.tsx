import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ padding: 16 }}>
        <Text> Subscribe to roadside coder </Text>
        <TextInput placeholder="Search city..." placeholderTextColor="red" />
      </View>
    </SafeAreaView>
  );
}
