import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { firebase } from "../config";
import { useNavigation, useRoute } from "@react-navigation/native";

function NextScreen(props) {
  const navigation = useNavigation();
  const [heading, setHeading] = useState("");
  const [skills, setSkills] = useState("");
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  const handleRegistration = async () => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await user.sendEmailVerification();

      const userData = {
        firstName,
        lastName,
        heading,
        company,
        experience,
        skills,
        education,
        email: user.email,
        userId: user.uid,
      };
      const route = useRoute();
      const firstName = route.params?.nfirstName || "Default";
      const lastName = route.params?.nlastName || "Default";
      const password = route.params?.npassword || "Default";
      const email = route.params?.nemail || "Default";
      await firebase.firestore().collection("users").add(userData);

      navigation.navigate("user profile");

      // Registration successful, proceed to the next screen or display a success message.
    } catch (error) {
      // Handle registration errors, display an error message, etc.
      alert(error.message);
    }
  };
  return (
    <View>
      <Text style={styles.label}>Heading</Text>
      <TextInput
        style={styles.textInput}
        //placeholder="Heading"
        onChangeText={(heading) => setHeading(heading)}
        autoCorrect={false}
        value={heading}
      />
      <Text style={styles.label}>Experience</Text>
      <TextInput
        style={styles.textInput}
        //placeholder="Experience"
        onChangeText={(experience) => setExperience(experience)}
        autoCorrect={false}
        value={experience}
      />
      <Text style={styles.label}>Skills</Text>
      <TextInput
        style={styles.textInput}
        //placeholder="Company"
        onChangeText={(skills) => setSkills(skills)}
        autoCorrect={false}
        value={skills}
      />
      <Text style={styles.label}>Education</Text>
      <TextInput
        style={styles.textInput}
        //placeholder="Education"
        onChangeText={(education) => setEducation(education)}
        autoCorrect={false}
        value={education}
      />
      <TouchableOpacity onPress={handleRegistration} style={styles.button}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default NextScreen;
