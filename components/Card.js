import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../components/colors";
import AppText from "./AppText";
import Icon from "react-native-vector-icons/Ionicons";
import AppButton from "./AppButton";
import { useNavigation } from "@react-navigation/native";

function Card({ title, subTitle, experience, image }) {
  const navigation = useNavigation();
  const handleExploreButton = () => {
    const userTitle = title;
    const userSubTitle = subTitle;
    const userExperience = experience;
    const userImage = image;
    navigation.navigate("Profile", {
      userTitle,
      userSubTitle,
      userExperience,
      userImage,
    });
  };

  return (
    <View style={styles.card}>
      <View>
        <View style={{ flexDirection: "row" }}>
          {image && <Image style={styles.profileImage} source={image} />}
          <View>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <Text style={styles.subTitle}>Experience: {experience}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <AppButton
            color="lightBlue"
            title="Explore Profile"
            onPress={handleExploreButton}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={styles.icon}>
          <Icon style={{ alignSelf: "flex-end" }} name="call" size={30} />
          <Text style={styles.bookACall}>Book A Call</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileImage: {
    width: "30%",
    height: "80%",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    marginTop: 10,
    marginBottom: 7,
    marginRight: "auto",
    fontSize: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    marginRight: "auto",
    fontSize: 15,
  },
  icon: {
    marginLeft: "auto",
    marginBottom: 40,
    alignSelf: "flex-end",
  },
  bookACall: {
    marginLeft: 40,
    fontSize: 10,
    marginTop: 10,
  },
});

export default Card;
