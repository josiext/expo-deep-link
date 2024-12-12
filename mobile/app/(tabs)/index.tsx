import { Button, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import * as Linking from "expo-linking";

const WEB_URL = "http://10.0.2.2:5173";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Button title="Open Web" onPress={() => Linking.openURL(WEB_URL)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
