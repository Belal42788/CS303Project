import { signInWithEmailAndPassword  } from "firebase/auth"
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


const LoginScreen = ({navigation}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = auth.currentUser;
    

    const HandleSignin= () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Done Login');
            navigation.navigate('Profile')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        
        <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/login.png")} />
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


        <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={HandleSignin}>LOGIN</Text>
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
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "royalblue",
    },
});

export default LoginScreen
