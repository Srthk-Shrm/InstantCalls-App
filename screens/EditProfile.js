import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { firebase } from "../config";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [heading, setHeading] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  useEffect(() => {
    // Fetch the user's profile data from the Firestore database and populate the fields
    const fetchUserProfile = async () => {
      try {
        const currentUser = firebase.auth().currentUser;
        const userRef = firebase
          .firestore()
          .collection("users")
          .doc(currentUser.uid);
        const doc = await userRef.get();
        if (doc.exists) {
          const userData = doc.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setHeading(userData.heading);
          setExperience(userData.experience);
          setSkills(userData.skills);
          setEducation(userData.education);
        }
      } catch (error) {
        console.log("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSaveProfile = async () => {
    try {
      const currentUser = firebase.auth().currentUser;
      const userRef = firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid);

      await userRef.update({
        firstName,
        lastName,
        heading,
        experience,
        skills,
        education,
      });

      navigation.goBack();
    } catch (error) {
      console.log("Error saving user profile:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ marginTop: 7, marginLeft: 4 }}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(firstName) => setFirstName(firstName)}
          value={firstName}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(lastName) => setLastName(lastName)}
          value={lastName}
        />

        <Text style={styles.label}>Heading</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(heading) => setHeading(heading)}
          value={heading}
        />

        <Text style={styles.label}>Experience</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(experience) => setExperience(experience)}
          value={experience}
        />

        <Text style={styles.label}>Skills</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(skills) => setSkills(skills)}
          value={skills}
        />

        <Text style={styles.label}>Education</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(education) => setEducation(education)}
          value={education}
        />
      </View>

      <TouchableOpacity onPress={handleSaveProfile} style={styles.button}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    paddingTop: 3,
    paddingBottom: 3,
    width: 300,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    borderRadius: 30,
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
    height: 40,
    width: 250,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  label: {
    fontSize: 10,
    marginBottom: 7,
    marginLeft: 3,
  },
});

export default EditProfile;
