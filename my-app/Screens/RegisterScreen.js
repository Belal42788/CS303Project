import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    signOut,
} from "firebase/auth";
import auth from "../firebase/config/firebase-config.js";
import React, { useState } from "react";
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
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { doc, setDoc, getFirestore, updateDoc, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import { Dimensions } from 'react-native';

const h = Dimensions.get('window').height;

const RegisterScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [BirthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const auth = getAuth();
    auth.languageCode = 'it';

    const Gprovider = new GoogleAuthProvider();

    const signGoogle = () => {
        signInWithPopup(auth, Gprovider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user.uid);

                navigation.navigate("Profile");
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

    const HandleRegister = async () => {
        if (pass(password) == false) {
            alert("Your pass is small");
            return;
        }

        if ((password == password1) & (firstName != "") & (lastName != "") & (email != "")) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const db = getFirestore();
                    const UserRef = doc(db, "users", user.uid);

                    // Add a new document in collection "cities"
                    await setDoc(UserRef, {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        BirthDate: BirthDate,
                        incard: [],
                        shop: [],
                        date: Date.now()
                    });

                    const docSnap = await getDoc(UserRef);

                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                    } else {
                        // docSnap.data() will be undefined in this case
                        console.log("No such document!");
                    }

                    //to set user info
                    await updateProfile(auth.currentUser, {
                        displayName: firstName + " " + lastName,
                        email: email,
                        password: password,
                        photoURL: "https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c"
                    })
                        .then(() => {
                            console.log("user profile added");
                        })
                        .catch((error) => {
                            alert(error.message);
                        });

                    //to send email verification
                    await sendEmailVerification(user)
                        .then(() => {
                            alert(
                                "Verification link has been sent to your email Plesase check your email then LOGIN"
                            );

                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            alert(errorMessage);
                        });

                    await signOut(auth)
                        .then(() => {
                            navigation.navigate("Login");
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            alert(errorMessage);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Email alredy registered");
                    console.log(errorMessage);
                });
        } else if (password != password1) {
            alert("Password not match");
        } else if (firstName == "") {
            alert("Please enter your First Name");
        } else if (lastName == "") {
            alert("Please enter your Last Name");
        } else if (email == "") {
            alert("Please enter your Email");
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

        <ImageBackground source={require('../assets/Image/reg3.jpg')} style={styles.container}>
            <View style={styles.logocont}>
                <Text style={styles.logoText}>
                    <FontAwesome name="xing" size={40} color="white" style={{}} />
                    Luxury
                </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your First Name"
                    placeholderTextColor="#003f5c"
                    value={firstName}
                    onChangeText={setFirstName}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Last Name"
                    placeholderTextColor="#003f5c"
                    value={lastName}
                    onChangeText={setLastName}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Email"
                    placeholderTextColor="#003f5c"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your Phone Number"
                    placeholderTextColor="#003f5c"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter your BirthDate: DD/MM/YYYY"
                    placeholderTextColor="#003f5c"
                    value={BirthDate}
                    onChangeText={setBirthDate}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    secureTextEntry={true}
                    placeholder="Enter Your password"
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

            <TouchableOpacity style={styles.RegBtn}>
                <Text style={styles.loginText} onPress={HandleRegister}>
                    Register
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
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.forgot_button}>Need to Login instead?</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        height: h,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    inputView: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 15,
        width: "90%",
        height: "7%",
        marginBottom: 5,
        alignItems: "center",
        textAlign: "left",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginTop: '1%',
    },
    TextInput: {
        fontSize: 19,
        width: "96%",
        height: "90%",
        textAlign: "left",
        color: "black",
        borderColor: "#fff"
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
        fontSize: 20,
        alignSelf: "center",
    },
    icon: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2%"
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
    forgot_button: {
        marginBottom: "10%",
        marginTop: "2%",
        textDecorationLine: "underline",
        fontSize: 20,
        color: "#d8d8d8",
    },
    logocont: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    logoText: {
        color: "white",
        fontSize: 50,
        alignSelf: "center",
        marginTop: "10%",
    },
});
export default RegisterScreen;
