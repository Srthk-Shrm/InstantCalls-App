import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CallCard({ name, time }) {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity>
          <View style={{ flex: 1, marginRight: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 25 }}>{name}</Text>
            <Text>{time}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ marginLeft: "auto", marginRight: 15 }}>
            <Icon
              name="call"
              style={{
                alignSelf: "flex-end",
              }}
              size={20}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#D3D3D3",
    height: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
});

export default CallCard;
