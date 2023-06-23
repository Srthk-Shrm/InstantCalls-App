import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function SubHeader({ screen }) {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <Icon
          name="arrow-back-outline"
          style={{ marginRight: 115 }}
          size={20}
        />
      </TouchableOpacity>
      <Text style={styles.text}>InstantCalls</Text>
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

export default SubHeader;
