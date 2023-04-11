import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import React, { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import AsyncStorage from "@react-native-community/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert, ImageBackground
  
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Signed, setSigned] = useState(false);
  const user = auth.currentUser;

  AsyncStorage.getItem("Signed").then((value) => {
    if (Signed == false) {
      setSigned(value);
    }
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
    if (email != "") {
      try {
        HandleSignin2();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <ImageBackground  source={require('../assets/reg3.jpg')} style={styles.container}>
      <StatusBar style="auto" />
      {/* <Image style={styles.image} source={require("../assets/4-removebg-preview (1).png")} /> */}

      <View style={styles.logocont}>
                <Text style={styles.logoText}><FontAwesome name="xing" size={"40px"} color="white" style={{}} /> Luxury</Text>
      </View>
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
      <View style={styles.smallloginicon}>
        <TouchableOpacity>
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
      <TouchableOpacity>
        <Text
          style={styles.forgot_button}
          onPress={() => navigation.navigate("Forgetpassword")}
        >
          Forgot your password?
        </Text>
      </TouchableOpacity>
      <View style={styles.smallView}>
        <Text>   </Text>
      </View>
    </ImageBackground>
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
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center",
    marginBottom: "-8%",
    width: 250,
    height: 250,
  },
  inputView: {
    backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 15,
        width: "90%",
        height: "7%",
        fontFamily:'cairo',
        marginBottom: "5px",
        alignItems: "center",
        textAlign: "left",
        alignContent:"center",
        alignSelf:"center",
        justifyContent:"center",
  },
  TextInput: {
    fontSize: "120%",
    width: "96%",
    height: "90%",
    textAlign: "left",
    color: "black",
    fontFamily:'cairo',
    fontWeight:"700",
  },
  forgot_button: {
    width:"100%",
    marginBottom: "10%",
    marginTop: "5%",
    color: "#d8d8d8",
    textDecorationLine: "underline",
    fontSize: 20,
  },
  loginBtn: {
    width: "85%",
    borderRadius: 13,
    height: "8%",
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
  registerBtn: {
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
  buttonText: {
    color: "black",
    fontSize: "200%",
    fontWeight: "700",
    fontFamily:'cairo',
    alignSelf:"center",
  },
  smallloginicon: {
    width: 55,
    height: 55,
    margin: 5,
    marginTop: "1%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-around",
    borderRadius: "50%",
  },
  logocont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    
  },
  logoText: {
    color: "white",
    fontSize: "50px",
    fontWeight: "600",
    fontFamily: 'prompt',
    justifyContent:'center',
    alignSelf: "center",
    marginTop: "30%",
  },
  smallView:{
    paddingBottom:'30%'
  },
});

export default LoginScreen;
