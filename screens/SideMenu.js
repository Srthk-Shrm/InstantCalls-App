import React from "react";
import Screen from "../components/Screen";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native";
import SubHeader from "../components/SubHeader";
import { useNavigation } from "@react-navigation/native";

function SideMenu(props) {
  const navigation = useNavigation();
  const handleAboutUs = () => {
    navigation.navigate("About");
  };
  const handlePrivacyPolicy = () => {
    navigation.navigate("Privacy");
  };

  return (
    <Screen>
      <SubHeader screen="Main Screen" />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleAboutUs}>
          <Text style={styles.text}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePrivacyPolicy}>
          <Text style={styles.text}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Version:1.0.0</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={styles.signOutContainer}>
          <Text style={styles.signOut}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </Screen>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 20,
  },
  container: {
    marginTop: 20,
    padding: 20,
  },
  signOut: {
    fontSize: 25,
    color: "white",
  },
  signOutContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingVertical: 10,
    backgroundColor: "maroon",
    width: "40%",
    borderRadius: 50,
    alignSelf: "center",
  },
});

export default SideMenu;
