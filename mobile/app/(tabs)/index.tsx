import { Button, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import * as Linking from "expo-linking";

const WEB_URL = "http://10.0.2.2:5173";

export default function TabOneScreen() {
  const url = Linking.useURL();

  if (url) {
    const { hostname, path, queryParams } = Linking.parse(url);

    console.log(
      `Linked to app with hostname: ${hostname}, path: ${path} and data: ${JSON.stringify(
        queryParams
      )}`
    );
  }

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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
