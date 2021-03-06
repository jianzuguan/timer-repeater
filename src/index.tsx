import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Title from "@timerrepeater/src/Title";

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!1</Text>
      <Title />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
