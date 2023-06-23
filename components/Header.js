import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function header() {
  const navigation = useNavigation();
  const handleMenuIconPress = () => {
    navigation.navigate("MenuScreen");
  };
  const handleLogoPress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Icon name="call" style={{ marginRight: 115 }} size={20} />
      </TouchableOpacity>
      <Text style={styles.text}>InstantCalls</Text>
      <TouchableOpacity onPress={handleMenuIconPress}>
        <Icon style={styles.menuIcon} name="menu" size={20} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: "center",
  },
  container: {
    padding: 20,
    flexDirection: "row",
  },
  menuIcon: {
    marginLeft: 100,
  },
});

export default header;
