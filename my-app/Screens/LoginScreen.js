import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Signed, setSigned] = useState(false);
  const user = auth.currentUser;


  AsyncStorage.getItem("Signed").then((value) => {
    if (Signed == false) { setSigned(value); }
  });

  
  const HandleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user.emailVerified) {
        AsyncStorage.setItem("Signed", true);
        AsyncStorage.setItem("email", email);
        AsyncStorage.setItem("password", password);
        navigation.navigate("Profile");
      } else {
        signOut(auth).then(() => alert("Email is not Verified"));
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Email or Password is wrong");
      console.log(errorMessage);
    });
  };
  const HandleSignin2 = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user.emailVerified) {
        navigation.navigate("Profile");
      } else {
        signOut(auth).then(() => alert("Email is not Verified"));
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  };
  
  if (Signed) {
    AsyncStorage.getItem("email").then((value) => {
      setEmail(value);
    });
    AsyncStorage.getItem("password").then((value) => {
      setPassword(value);
    });
    HandleSignin2();
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={require("../assets/login.png")} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your Email here:"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your Password:"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.buttonText} onPress={HandleSignin}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerBtn}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.forgot_button}
          onPress={() => navigation.navigate("Forgetpassword")}
        >
          Forgot your password?
        </Text>
      </TouchableOpacity>
      <View style={styles.smallloginicon}>
        <TouchableOpacity >
          {/* <TouchableOpacity onPress={onFacebookButtonPress}> */}
          <Image
            style={styles.smallloginicon}
            source={require("../assets/thcc.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.smallloginicon}
            source={require("../assets/gmail_icon-icons.com_62758.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.smallloginicon}
            source={require("../assets/twitter.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: 66,
    height: 66,
  },
  inputView: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2.5,
    borderRadius: 5,
    width: "85%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
    textAlign: "left",
  },
  TextInput: {
    fontSize: 16,
    width: "100%",
    height: 50,
    padding: 5,
    textAlign: "left",
    color: "black",
  },
  forgot_button: {
    marginBottom: 40,
    marginTop: 20,
    color: "#003f5c",
    textDecorationLine: "underline",
    fontSize: 20,
    color: "rgb(100, 128, 128)",
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "royalblue",
    fontWeight: "bold",
  },
  registerBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "royalblue",
    fontWeight: "bold",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 15,
    textAlign: "center",
  },
  smallloginicon: {
    width: 60,
    height: 60,
    margin: 5,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-around",
    borderRadius: "50%",
  },
});

export default LoginScreen;
