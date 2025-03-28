import { Text, View } from "react-native";
import { Link } from "expo-router"; // Ensure this import is correct

export default function Index() {
  return (
  <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-pblack" >Edit app/index.tsx to edit this screen.</Text>
      <Link href="/home">Go to Home</Link>
    </View>
  );
}