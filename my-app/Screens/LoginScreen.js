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
            <Text style={styles.forgot_button}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.buttonText} onPress={HandleSignin}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate("Register")}>Register</Text>
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
        fontSize: 15,
        marginBottom: 50,
        color: "#003f5c",
        textDecorationLine: 'underline'
    },
    loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#5cb85c",
        fontWeight:"bold"
    },
    registerBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "royalblue",
        fontWeight:'bold'
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 15,
        textAlign: "center",
      },
});

export default LoginScreen
