import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import AppText from "./AppText";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SelectList } from "react-native-dropdown-select-list";
import AppButton from "./AppButton";
import colors from "./colors";
import { useNavigation } from "@react-navigation/native";

function UserProfileCard({
  image,
  name,
  education,
  skills,
  company,
  experience,
}) {
  const [selectedValue, setSelectedValue] = useState("");
  const [selected, setSelected] = useState("");
  const [phoneTime, setPhoneTime] = useState(new Date());
  const data = [
    { key: "1", value: "Saturday 8 PM", disabled: true },
    { key: "2", value: "Saturday 9 PM" },
    { key: "3", value: "Sunday 8 PM" },
    { key: "4", value: "Sunday 9 PM", disabled: true },
    { key: "5", value: "Friday 8 PM" },
    { key: "6", value: "Friday 12:29 AM" },
    { key: "7", value: "Unavailable" },
  ];
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      setPhoneTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isTimeMatched = () => {
    const selectedTime = data.find((item) => item.value === selected);
    if (selectedTime) {
      const selectedTimeMs = new Date(selectedTime.value).getTime();
      const phoneTimeMs = phoneTime.getTime();

      // Compare the time values
      return selectedTimeMs === phoneTimeMs;
    }

    return false;
  };

  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.name}>{name}</AppText>
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={{ marginTop: 20, marginLeft: 20 }}
              size={20}
              name="book"
            />
            <AppText style={{ marginTop: 20, marginLeft: 10, fontSize: 14 }}>
              {education}
            </AppText>
            <Icon
              style={{ marginTop: 20, marginLeft: 20 }}
              size={20}
              name="construct"
            />
            <AppText style={{ marginTop: 20, marginLeft: 10, fontSize: 14 }}>
              {skills}
            </AppText>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={{ marginTop: 20, marginLeft: 20 }}
              size={20}
              name="today"
            />
            <AppText style={{ marginTop: 20, marginLeft: 10, fontSize: 14 }}>
              {company}
            </AppText>
            <Icon
              style={{ marginTop: 20, marginLeft: 20, fontSize: 14 }}
              size={20}
              name="hourglass"
            />
            <AppText style={{ marginTop: 20, marginLeft: 10, fontSize: 14 }}>
              {experience}
            </AppText>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
        <View style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <View>
          <View style={styles.slotText}>
            <Text style={{ fontSize: 16, color: "white" }}>
              Set Availability
            </Text>
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
        <TouchableOpacity disabled={!isTimeMatched()}>
          <Icon
            style={[
              styles.callButton,
              !isTimeMatched() ? styles.callButtonDisabled : null,
            ]}
            size={30}
            name="call"
          />
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
    padding: 10,
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
    backgroundColor: "green",
  },
  callButtonDisabled: {
    backgroundColor: "gray",
  },
  dropDownContainer: {
    marginLeft: 20,
    marginTop: 10,
    width: "100%",
    padding: 20,
  },
  editButton: {
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default UserProfileCard;
