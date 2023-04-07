import {  StyleSheet,View,Text,Image,useWindowDimensions,TouchableOpacity,TextInput } from "react-native";
import logo from "../assets/forgot-password.png"
import React, { useState } from "react";
import {  sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/config/firebase-config";


export default function Forgetpassword  ({navigation}){
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
        <Image source={logo} style={[styles.logo]}/>
        <Text  style={styles.title}>forgot password </Text>


        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email :"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={setEmail}
            />
        </View>

        <TouchableOpacity style={styles.loginBtn} onLayout={styles.hoverstyle}onPress={handelforgetpassword} >
            <Text style={styles.loginText} onPressIn={styles.loginText}>SEND TO EMAIL</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('Home')} >
            <Text style={styles.forgot_button} >back to sign in</Text>
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
        width: "40%",
        height:"30%",
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
    loginBtn: {
        width: "90%",
        borderRadius: 50,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        fontSize:50,
        Size:50,
        backgroundColor: "#64e3ff",
        borderWidth:2,
        borderColor:"#64e3ff"
      
      },
      TextInput: {
        fontSize:20,
        width:"100%",
        height: 50,
        flex: 1,
        padding:0,
        marginLeft: 0,
        textAlign:"left",
        color:"black",
      },
    
      inputView: {
        backgroundColor: "white",
        borderColor:"#64e3ff",
        borderWidth: 2,
        borderRadius: 5,
        width: "90%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        textAlign:"left",
      },RegBtn:{
        width: "90%",
        borderRadius: 5,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        fontSize:50,
        Size:50,
        backgroundColor: "black",
        borderWidth:2,
        borderColor:"#64e3ff",
        marginBottom:0
      },
      loginText :{
        fontSize :30,
        lineHeight:20,
        fontStyle:"normal",
        padding:10
        ,color:"black",
      },RegisterText:{
        fontSize :20,
        lineHeight:20,
        fontStyle:"normal",
        padding:10
        ,color:"#64e3ff",
    
      },
      forgot_button: {
        height: 30,
        marginTop :30,
        marginBottom: 0,
        fontSize:25,
        color:"rgb(100, 128, 128)",
      },

});
