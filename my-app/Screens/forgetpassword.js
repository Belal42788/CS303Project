import {  StyleSheet,View,Text,Image,useWindowDimensions,TouchableOpacity,TextInput } from "react-native";
//import React from "react";
//import { StatusBar } from "expo-status-bar";
import logo from "../assets/download.png"
import React, { useState } from "react";
import {  sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/config/firebase-config";


function wellcome  ({navigation}){
    const [email, setEmail] = useState("");
    const {height}=useWindowDimensions();

   const handelforgetpassword =()=>{
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      console.log("done")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    }

return(
    <View style={styles.container}>
        <Image source={logo} style={[styles.logo,{height:height*0.3}]}/>
        <Text  style={styles.title}>forrget password </Text>
        <Text  style={styles.title1}>this app is taking about  jdshf sdbjasdvb dashfsahf sdakhfaksjdf hasdkfhlask </Text>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="email"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={email}
            onChangeText={setEmail}
            />
        </View>

        <TouchableOpacity style={styles.button} onPress={handelforgetpassword} >
            <Text>SEND LINK TO YOUR EMAIL</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('Home')} >
            <Text>BACK TO SIGHNIN</Text>
        </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
       padding:20,
    },
    logo:{
        width: "70%",
        maxWidth:300,
        maxHeight:300,
        marginBottom:10
    },
    title:{
        fontWeight:"bold",
        fontSize:50,
        marginBottom:20
    },
    title1:{       
        fontSize:20,
        color:"3A3967",
         marginBottom:20
    },
    button:{       
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "royalblue",
        marginBottom:10
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
});

export default wellcome; 