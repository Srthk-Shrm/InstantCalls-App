import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { ScrollView } from "react-native";
import Header from "../components/Header";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen(props) {
  return (
    <ScrollView>
      <Screen>
        <Header />
        <Card
          title="Sarthak Sharma"
          subTitle="Student"
          experience="5 Years"
          image={require("../assets/image.jpg")}
        />
        <Card
          title="ABC"
          subTitle="Heading"
          experience="8 Years"
          image={require("../assets/Default.png")}
        />
      </Screen>
    </ScrollView>
  );
}

export default HomeScreen;
