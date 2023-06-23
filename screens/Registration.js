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
import { useNavigation } from "@react-navigation/native";

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

      const userRef = firebase.firestore().collection("users");
      const existingUser = await userRef.where("email", "==", email).get();

      if (existingUser.empty) {
        await userRef.add(userData);
      } else {
        const existingUserId = existingUser.docs[0].id;
        await userRef.doc(existingUserId).set(userData);
      }

      navigation.navigate("user profile");

      // Registration successful, proceed to the next screen or display a success message.
    } catch (error) {
      // Handle registration errors, display an error message, etc.
      alert(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ marginTop: 7, marginLeft: 4 }}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(firstName) => setFirstName(firstName)}
          autoCorrect={false}
          value={firstName}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(lastName) => setLastName(lastName)}
          autoCorrect={false}
          value={lastName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(email) => setEmail(email)}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(password) => setPassword(password)}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
          value={password}
        />
        <Text style={styles.label}>Heading</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(heading) => setHeading(heading)}
          autoCorrect={false}
          value={heading}
        />
        <Text style={styles.label}>Experience</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(experience) => setExperience(experience)}
          autoCorrect={false}
          value={experience}
        />
        <Text style={styles.label}>Skills</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(skills) => setSkills(skills)}
          autoCorrect={false}
          value={skills}
        />
        <Text style={styles.label}>Education</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(education) => setEducation(education)}
          autoCorrect={false}
          value={education}
        />
      </View>

      <TouchableOpacity onPress={handleRegistration} style={styles.button}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    paddingHorizontal: 20,
    paddingTop: 3,
    paddingBottom: 3,
    width: 300,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    borderRadius: 30,
    fontSize: 12,
    backgroundColor: "white",
    marginLeft: 10,
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
    marginLeft: 10,
  },
});

export default Registration;
