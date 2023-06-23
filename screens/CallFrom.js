import React from "react";
import Screen from "../components/Screen";
import Header from "../components/Header";
import { View, Text, StyleSheet } from "react-native";
import CallCard from "../components/CallCard";
import SubHeader from "../components/SubHeader";
function CallFrom(props) {
  return (
    <Screen>
      <SubHeader screen="log" />
      <View style={styles.container}>
        <Text style={styles.heading}>Scheduled By Them</Text>
      </View>
      <CallCard name="GDSHBDB" time="Satuday, 5 PM" />
      <CallCard name="GDSHBDB" time="Satuday, 5 PM" />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default CallFrom;
