import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Header from "../components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import CallCard from "../components/CallCard";

const LogScreen = ({ navigation }) => {
  return (
    <Screen>
      <Header />
      <View style={styles.container}>
        <Text style={styles.heading}>Scheduled By Me</Text>
      </View>
      <CallCard name="ABCDUJLnsc" time="Saturday, 8 PM" />
      <CallCard name="ERGVCN" time="Sunday, 9 PM" />
      <TouchableOpacity onPress={() => navigation.navigate("callfrom")}>
        <View>
          <Text style={styles.byThem}>Scheduled By Them=></Text>
        </View>
      </TouchableOpacity>
    </Screen>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
  },
  container: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  byThem: {
    alignSelf: "flex-end",
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default LogScreen;
