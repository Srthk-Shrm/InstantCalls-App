import React, { useState } from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import AppText from "./AppText";
import Icon from "react-native-vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SelectList } from "react-native-dropdown-select-list";
import { useRoute } from "@react-navigation/native";

function ProfileCard({ image, children }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Saturday 8 PM", disabled: true },
    { key: "2", value: "Saturday 9 PM" },
    { key: "3", value: "Sunday 8 PM" },
    { key: "4", value: "Sunday 9 PM", disabled: true },
    { key: "5", value: "Fridya 8 PM" },
    { key: "6", value: "Fridday 9 PM" },
    { key: "7", value: "Unavailable" },
  ];
  const route = useRoute();
  const userTitle = route.params?.userTitle || "Default";
  const userSubTitle = route.params?.userSubTitle || "Default";
  const userExperience = route.params?.userExperience || "Default";
  const userImage = route.params?.userImage || "../assets/Default.jpg";

  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.image} source={userImage} />
        <View>
          <AppText style={styles.name}>{userTitle}</AppText>
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={{ marginTop: 20, marginLeft: 20 }}
              size={30}
              name="book"
            />
            <AppText style={{ marginTop: 20, marginLeft: 10 }}> Btech</AppText>
            <Icon
              style={{ marginTop: 20, marginLeft: 20 }}
              size={30}
              name="construct"
            />
            <AppText style={{ marginTop: 20, marginLeft: 10 }}>Android</AppText>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={{ marginTop: 20, marginLeft: 20 }}
              size={30}
              name="today"
            />
            <AppText style={{ marginTop: 20, marginLeft: 10 }}> TCS </AppText>
            <Icon
              style={{ marginTop: 20, marginLeft: 20 }}
              size={30}
              name="hourglass"
            />
            <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 20 }}>
              {userExperience}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View>
          <View style={styles.slotText}>
            <Text style={{ fontSize: 25, color: "white" }}>Book A Slot</Text>
          </View>
          {/* <Icon name="arrow-round-down" /> */}
          <View style={styles.dropDownContainer}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              placeholder="Select Time"
            />
          </View>
        </View>
        {/* <RadioButton.Group
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
        >
          <View style={styles.radioGroup}>
            <View style={styles.radio}>
              <RadioButton value="option1" />
              <Text style={styles.radioOptions}>Friday, 8 PM</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton value="option2" />
              <Text style={styles.radioOptions}>Saturday, 8 PM</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton value="option3" />
              <Text style={styles.radioOptions}>Sunday 8 PM</Text>
            </View>
          </View>
        </RadioButton.Group> */}
        <TouchableOpacity>
          <Icon style={styles.callButton} size={30} name="call" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "30%",
    height: 150,
    borderRadius: 100,
    marginLeft: 20,
  },
  name: {
    fontSize: 25,
    marginLeft: 30,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    height: 200,
    padding: 20,
  },
  slotText: {
    marginTop: 10,
    padding: 20,
    backgroundColor: "#60A3D9",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    marginLeft: 20,
  },
  radio: {
    flexDirection: "row",
    padding: 20,
  },
  radioGroup: {
    padding: 10,
  },
  radioOptions: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  callButton: {
    marginTop: 40,
    marginLeft: 80,

    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
  },
  dropDownContainer: {
    marginLeft: 20,
    marginTop: 10,
    width: "100%",
  },
});

export default ProfileCard;
