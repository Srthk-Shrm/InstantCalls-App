import React from "react";
import { View } from "react-native";
import Screen from "../components/Screen";
import SubHeader from "../components/SubHeader";
import UserProfileCard from "../components/UserProfileCard";

function UserProfile(props) {
  return (
    <Screen>
      <SubHeader screen="Home Screen" />
      <UserProfileCard
        name="ABC"
        company="InstantCalls"
        education="B-tech"
        skills="Python"
        experience="7 YRS"
        image={require("../assets/Default.png")}
      />
    </Screen>
  );
}

export default UserProfile;
