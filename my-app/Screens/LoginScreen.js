import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert, ImageBackground

} from "react-native";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {Dimensions} from 'react-native';

const h = Dimensions.get('window').height;
const provider = new GoogleAuthProvider();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailVerified, setemailVerified] = useState("");
  const auth = getAuth();

  auth.languageCode = 'it';


  const signGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigation.navigate("Main Screen");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const HandleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (!user.emailVerified) {
          signOut(auth).then(() => {
            alert("Email is not Verified");
          }
          );
        } else {
          navigation.navigate("Main Screen");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Email or Password is wrong");
        console.log(errorMessage);
      });
  };

  return (
    <ImageBackground source={require('../assets/Image/reg3.jpg')} style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoVeiw}>
        <Text style={styles.logoText}>
          {/* <FontAwesome name="xing" size={"40px"} color="white" style={{}} /> */}
          Luxury
        </Text>
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
      
      <TouchableOpacity>
        <Text
          style={styles.forgot_button}
          onPress={() => navigation.navigate("Forgetpassword")}
        >
          Forgot your password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.buttonText} onPress={HandleSignin}>
          LOGIN
        </Text>
      </TouchableOpacity>




      <View style={styles.icon}>
        <TouchableOpacity>
          <Image
            style={styles.smallloginicon}
            source={require("../assets/Image/thcc.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={signGoogle}>
          <Image
            style={styles.smallloginicon}
            source={require("../assets/Image/gmail_icon-icons.com_62758.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.smallloginicon}
            source={require("../assets/Image/twitter.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
      <Text
      style={styles.Sign_Up_button}
      onPress={() => navigation.navigate("Register")}
      >
      Don't Have Account?Sign Up Now.
      </Text>
    </TouchableOpacity>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: h,
    backgroundColor: "#fff",
  },
  logoVeiw: {
    alignItems: "center",
    width: "100%",
    marginTop: "10%",
    marginBottom: "30%"
  },
  logoText: {
    color: "white",
    alignSelf: "center",
    fontSize: 50,
  },
  inputView: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2.5,
    borderRadius: 15,
    width: "90%",
    height: 50,
    marginBottom: 5,
    alignItems: "center",
    textAlign: "left",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom:10
  },
  TextInput: {
    fontSize: 19,
    width: "96%",
    height: 50,
    textAlign: "left",
    color: "black",
    borderColor: "#fff"
  },
  forgot_button: {
    width: "100%",
    marginBottom: "10%",
    marginTop: "5%",
    textAlign:"center",
    color: "#d8d8d8",
    textDecorationLine: "underline",
    fontSize: 13,
  },
  Sign_Up_button: {
    width: "100%",
    marginBottom: "10%",
    marginTop: "5%",
    color: "#d8d8d8",
    alignItems: "center",    
    justifyContent: "center",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 15,
  },
  loginBtn: {
    width: "85%",
    borderRadius: 13,
    height: "8%",
    marginTop: "2%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf:"center",
    backgroundColor: "#ce9e04",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
  },
  registerBtn: {
    width: "85%",
    borderRadius: 13,
    height: "8%",
    marginBottom: "2%",
    marginTop: "2%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#ce9e04",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: 700,
    alignSelf: "center",  
    justifyContent: "center",
    alignContent: "center",
  },
  icon:{
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"10%"
  },
  smallloginicon: {
    width: 55,
    height: 55,
    marginTop: "1%",
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
  },
});

export default LoginScreen;
