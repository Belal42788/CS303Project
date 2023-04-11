import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
} from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert, ImageBackground
} from "react-native";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const user = auth.currentUser;

    const HandleRegister = () => {
        if (pass(password) == false) {
            alert("Your pass is small");
            return;
        }

        if ((password == password1) & (name != "")) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    //to set user informatoin to database
                    // const db = getDatabase();
                    // set(ref(db, 'users/' + user.uid), {
                    //     age: age,
                    //     date: Date.now()
                    // });

                    //to set user info
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        email: email,
                        password: password,
                    })
                        .then(() => {
                            console.log("user name updated");
                        })
                        .catch((error) => {
                            alert(error.message);
                        });

                    //to send email verification
                    sendEmailVerification(user)
                        .then(() => {
                            alert(
                                "Verification link has been sent to your email Plesase check your email then LOGIN"
                            );
                            navigation.navigate("Login");
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            alert(errorMessage);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Alert.alert("Email alredy registered");
                    console.log(errorMessage);
                });
        } else if (password != password1) {
            alert("Password not match");
        } else if (name == "") {
            alert("Please enter your Name");
        }
    };

    function pass(password) {
        if (password < 8) {
            return false;
        } else {
            return true;
        }
    }

    return (

        <ImageBackground source={require('../assets/reg3.jpg')} style={styles.container}>
            <StatusBar style="auto" />
            {/* <Image style={styles.image} source={require("../assets/3-removebg-preview.png")} /> */}

            <View style={styles.logocont}>
                <Text style={styles.logoText}><FontAwesome name="xing" size={"40px"} color="white" style={{}} /> Luxury</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Name :"
                    placeholderTextColor="#003f5c"
                    value={name}
                    onChangeText={setName}
                />
            </View>
            {/* <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Age:"
                    placeholderTextColor="#003f5c"
                    value={age}
                    onChangeText={setAge}
                />
            </View> */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Email :"
                    placeholderTextColor="#003f5c"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    secureTextEntry={true}
                    placeholder="Enter Your password :"
                    placeholderTextColor="#003f5c"
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    secureTextEntry={true}
                    placeholder="Confirm your password :"
                    placeholderTextColor="#003f5c"
                    value={password1}
                    onChangeText={setPassword1}
                />
            </View>

            <TouchableOpacity style={styles.RegBtn}>
                <Text style={styles.loginText} onPress={HandleRegister}>
                    Register
                </Text>
            </TouchableOpacity>
            <View style={styles.smallloginicon}>
                <TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.forgot_button}>Need to Login instead?</Text>
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
        // marginTop: '50px',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: "-8%",
        marginTop: "-12%",
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
        fontFamily: 'cairo',
        marginBottom: "5px",
        alignItems: "center",
        textAlign: "left",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
    TextInput: {
        fontSize: "120%",
        width: "96%",
        height: "90%",
        textAlign: "left",
        color: "black",
        fontFamily: 'cairo',
        fontWeight: "700",
    },
    RegBtn: {

        width: "85%",
        borderRadius: 13,
        height: "8%",
        marginBottom: "2%",
        marginTop: "2%",
        justifyContent: "center",
        alignItems: "flex-end",
        alignContent: "center",
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "black",
        display: "flex",

    },
    loginText: {
        color: "black",
        fontSize: "200%",
        fontWeight: "700",
        fontFamily: 'cairo',
        alignSelf: "center",
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
    forgot_button: {
        marginBottom: "10%",
        marginTop: "5%",
        textDecorationLine: "underline",
        fontSize: 20,
        color: "#d8d8d8",
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
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: "30%",
    },
    smallView: {
        paddingBottom: '20%'
    },
});
export default RegisterScreen;
