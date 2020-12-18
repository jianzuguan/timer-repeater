import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Timer() {
  const [countdown, setCountdown] = useState(30);
  const [isCounting, setIsCounting] = useState(false);

  const reset = () => {
    setCountdown(60);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.countdown}>{countdown}</Text>
      {/* <Button title="reset" onPress={reset} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    // borderWidth: 8,
  },
  countdown: {
    // borderWidth: 8,
  },
  resetButton: {
    // borderWidth:8,
  }
});

export default Timer;
