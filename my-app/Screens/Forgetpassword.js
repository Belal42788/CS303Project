import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,ImageBackground
} from "react-native";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/config/firebase-config";

export default function Forgetpassword({ navigation }) {
  const [email, setEmail] = useState("");
  const { height } = useWindowDimensions();

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
    <ImageBackground source={require('../assets/reg3.jpg')} style={styles.container}>
      <Image   source={require("../assets/5-removebg-preview.png")} style={[styles.logo]} />
      {/* <Text style={styles.title}>forgot password </Text> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="  Email :"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onLayout={styles.hoverstyle}
        onPress={handelforgetpassword}
      >
        <Text style={styles.loginText} onPressIn={styles.loginText}>
          SEND TO EMAIL
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.forgot_button}>back to sign in</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginBottom: "50%",
        marginTop: "-10%",
        width: 300,
        height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 20,
  },
  title1: {
    fontSize: 20,
    color: "3A3967",
    marginBottom: 20,
  },
  loginBtn: {
    width: "85%",
    borderRadius: 13,
    height: "8%",
    marginBottom: "2%",
    marginTop: "2%",
    justifyContent: "center",
    alignItems:"flex-end",
    alignContent:"center",
    backgroundColor: "#ce9e04",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
    display:"flex",
  },
  TextInput: {
    fontSize: "160%",
    width: "96%",
    height: "90%",
    textAlign: "left",
    color: "black",
    fontFamily:'cairo',
    fontWeight:"800",
    
  },

  inputView: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2.5,
    borderRadius: 15,
    width: "90%",
    height: "7%",
    fontFamily:'cairo',
    marginBottom: "5%",
    marginTop: "-50%",
    alignItems: "center",
    textAlign: "left",
    alignContent:"center",
    alignSelf:"center",
    justifyContent:"center",
  },
  RegBtn: {
    width: "90%",
    borderRadius: 5,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    fontSize: 50,
    Size: 50,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "#64e3ff",
    marginBottom: 0,
  },
  loginText: {
    color: "black",
    fontSize: "200%",
    fontWeight: "700",
    fontFamily:'cairo',
    alignSelf:"center",
  },
  RegisterText: {
    fontSize: 20,
    lineHeight: 20,
    fontStyle: "normal",
    padding: 10,
    color: "#64e3ff",
  },
  forgot_button: {
    marginBottom: "10%",
    marginTop: "5%",
    color: "#003f5c",
    textDecorationLine: "underline",
    fontSize: 20,
    color: "rgb(100, 128, 128)",
  },
});
