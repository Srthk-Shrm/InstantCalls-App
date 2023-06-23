//web: 504022251321-78l06vejlsdqmklnita95036ufmntq11.apps.googleusercontent.com

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import LogScreen from "./screens/LogScreen";
//import { createDrawerNavigator } from "react-navigation-drawer";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import CallFrom from "./screens/CallFrom";
import "expo-dev-client";
import SideMenu from "./screens/SideMenu";
import About from "./screens/About";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import { useState, useEffect } from "react";

import UserProfile from "./screens/UserProfile";
import Registration from "./screens/Registration";
import NextScreen from "./screens/NextScreen";
import PhoneAuthScreen from "./screens/PhoneAuthScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(false);

  useEffect(() => {
    const checkPhoneNumberVerification = async () => {
      const currentUser = firebase.auth().currentUser;

      if (currentUser) {
        // User is logged in
        const { phoneNumber, phoneNumberVerified } = currentUser;

        if (phoneNumber && phoneNumberVerified) {
          // Phone number is verified
          setIsPhoneNumberVerified(true);
        } else {
          // Phone number is not verified
          setIsPhoneNumberVerified(false);
        }
      } else {
        // User is not logged in
        setIsPhoneNumberVerified(false);
      }
    };

    checkPhoneNumberVerification();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isPhoneNumberVerified ? (
          <>
            <Stack.Screen
              name="Main Screen"
              component={MainSCreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuScreen"
              component={SideMenuList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen name="Authorization" component={PhoneAuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const SideMenuList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SideMenu"
        component={SideMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Privacy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

const MainSCreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "UserProfile") {
            iconName = "person-outline";
          } else if (route.name == "Call") {
            iconName = "call-outline";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      options={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="UserProfile"
        component={HandleUserProfile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Call"
        component={LogStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
const HandleUserProfile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="user profile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="nextScreen" component={NextScreen} />
    </Stack.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const LogStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="log"
      component={LogScreen}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      name="callto"
      component={CallTo}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen
      name="callfrom"
      component={CallFrom}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
