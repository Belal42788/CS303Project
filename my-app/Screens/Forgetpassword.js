import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput, ImageBackground
} from "react-native";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/config/firebase-config";
import { Dimensions } from 'react-native';

const h = Dimensions.get('window').height;
const Forgetpassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const handelforgetpassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        console.log("done");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <ImageBackground source={require('../assets/Image/reg3.jpg')} style={styles.container}>

      <View style={styles.logocont}>
        <Text style={styles.logoText}>
          Luxury
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email :"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        style={styles.ForgetButton}
        onLayout={styles.hoverstyle}
        onPress={handelforgetpassword}
      >
        <Text style={styles.ForgetText}>
          Send
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signBack}>sign in</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: h,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logocont: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  logoText: {
    color: "white",
    fontSize: 50,
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: "15%",
  },
  inputView: {
    backgroundColor: "white",
    width: "90%",
    height: "7%",
    borderColor: "black",
    borderWidth: 2.5,
    borderRadius: 15,
    alignItems: "center",
    textAlign: "left",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop:"40%"
  },
  TextInput: {
    width: "95%",
    fontSize: 16,
    textAlign: "left",
    color: "black",
    outlineStyle: 'none',
    borderColor: "#fff",
  },
  ForgetButton: {
    width: "60%",
    borderRadius: 13,
    height: "8%",
    marginBottom: "2%",
    marginTop: "2%",
    justifyContent: "center",
    alignItems: "flex-end",
    alignContent: "center",
    backgroundColor: "#ce9e04",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
    marginTop:"20%"
  },
  ForgetText: {
    color: "black",
    fontSize: 20,
    // fontWeight: "700",
    // fontFamily:'cairo',
    alignSelf: "center",
  },
  signBack: {
    marginBottom: 0,
    marginTop: "5%",
    color: "#d8d8d8",
    textDecorationLine: "underline",
    fontSize: 20,
  },
});


export default Forgetpassword;