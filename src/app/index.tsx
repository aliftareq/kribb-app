import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const properties = [
  { id: "1", title: "Modern Apartment", city: "Dhaka", price: 85000 },
  { id: "2", title: "Cozy Studio", city: "Chittagong", price: 45000 },
  { id: "3", title: "Family Villa", city: "Sylhet", price: 220000 },
  { id: "4", title: "Lakeview Flat", city: "Dhaka", price: 120000 },
  { id: "5", title: "Seaside Cottage", city: "Cox's Bazar", price: 150000 },
];

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ padding: 16 }}>
        <Text> Subscribe to roadside coder </Text>
        <TextInput
          placeholder="Search city..."
          placeholderTextColor="#676767"
          style={{
            borderWidth: 1,
            borderColor: "green",
            borderRadius: 8,
            padding: 10,
            marginTop: 12,
          }}
        />
        <TouchableOpacity
          onPress={() => alert("seraching....!")}
          style={{
            backgroundColor: "rgb(53, 46, 241)",
            borderRadius: 8,
            padding: 12,
            marginTop: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
            Search
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              marginBottom: 12,
              backgroundColor: "#fff",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text>{item.city}</Text>
            <Text>৳{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
