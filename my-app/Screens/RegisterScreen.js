import { createUserWithEmailAndPassword } from "firebase/auth"
import { StatusBar } from "expo-status-bar";
import auth from '../firebase/config/firebase-config.js'
import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const user = auth.currentUser;

    const HandleRegister = () => {
        if(pass(password)== false){
            alert("Your pass is small");
            return;
        }
        if (password == password1) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    const user = userCredential.user;
                    //to set user informatoin to database
                    const db = getDatabase();
                    set(ref(db, 'users/' + user.uid), {
                        name: name,
                        age: age,
                        email: email,
                        date: Date.now()
                    });

                    navigation.navigate('Profile')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        } else {
            alert("Password not match");
        }
    }
    
    function pass(password){
        if(password<8){
            return false;
        }
        else{
            return true;
        }
    }

    return (

        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/signup.png")} />
            <StatusBar style="auto" />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Name:"
                    placeholderTextColor="#003f5c"
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Age:"
                    placeholderTextColor="#003f5c"
                    value={age}
                    onChangeText={setAge}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Email:"
                    placeholderTextColor="#003f5c"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    secureTextEntry={true}
                    placeholder="Enter Your password:"
                    placeholderTextColor="#003f5c"
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    secureTextEntry={true}
                    placeholder="Confirm your password"
                    placeholderTextColor="#003f5c"
                    value={password1}
                    onChangeText={setPassword1}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={HandleRegister}>Register</Text>
            </TouchableOpacity>
            <Text>  </Text>
            <Text>  </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.forgot_button}>Need to Login instead?</Text>
            </TouchableOpacity>
            <View style={styles.smallloginicon}>
                <TouchableOpacity >
                    <Image
                        style={styles.smallloginicon}
                        source={require("../assets/thcc.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity >
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
        marginTop: '30%',
        marginBottom: '60px',
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
        color: "black"
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
    textStyle: {
        fontSize: 15,
        marginBottom: 50,
        color: "#003f5c",
        textDecorationLine: 'underline'
    }, smallloginicon: {
        width: 60,
        height: 60,
        margin: 5,
        marginTop: 0,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "space-around",
        borderRadius: "50%",
    },
    forgot_button: {
        marginBottom: 40,
        marginTop: 20,
        color: "#003f5c",
        textDecorationLine: "underline",
        fontSize: 20,
        color: "rgb(100, 128, 128)",
    },
});
export default RegisterScreen