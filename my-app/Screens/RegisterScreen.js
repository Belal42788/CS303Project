import { createUserWithEmailAndPassword } from "firebase/auth"
import { StatusBar } from "expo-status-bar";
import auth from '../firebase/config/firebase-config.js'
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

const RegisterScreen = ({navigation}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const user = auth.currentUser;
    if (user !== null) {
        const email = user.email;
        console.log(email)
    }


    const HandleRegister = () => {
        if(password==password1){
            createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        
        const user = userCredential.user;
        console.log('Done');
        
        navigation.navigate('Profile')
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        });
        }else {
            alert("Password not match");
        }
    }


    return (
        
        <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/signup.png")} />
        <StatusBar style="auto" />

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={setEmail}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="RE-Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password1}
            onChangeText={setPassword1}
            />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={HandleRegister}>Register</Text>
        </TouchableOpacity>

        </View>
    )
}
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
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "royalblue",
    },
});
export default RegisterScreen