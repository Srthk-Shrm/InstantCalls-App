import React from "react";
import Screen from "../components/Screen";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
function ProfileScreen(props) {
  return (
    <Screen>
      <SubHeader screen="Home Screen" />
      <ProfileCard image={require("../assets/image.jpg")} />
    </Screen>
  );
}

export default ProfileScreen;
