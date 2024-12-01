import { Text, View } from "react-native";
import { Link } from "expo-router"; // Ensure this import is correct

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/profile">Go to Profile</Link>
    </View>
  );
}