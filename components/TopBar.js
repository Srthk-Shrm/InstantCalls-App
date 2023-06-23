import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TopBar = () => {
  const navigation = useNavigation();

  const navigateToScreen1 = () => {
    navigation.navigate("callto");
  };
  const navigateToScreen2 = () => {
    navigation.navigate("callfrom");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToScreen1} style={styles.button}>
        <Text style={styles.buttonText}>Call From</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToScreen2} style={styles.button}>
        <Text style={styles.buttonText}>Call To</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "lightblue",
  },
  button: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TopBar;
