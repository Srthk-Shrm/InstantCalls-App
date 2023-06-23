import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "./colors";
function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#60A3D9",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "50%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
