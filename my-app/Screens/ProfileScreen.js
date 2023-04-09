import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import { signOut, deleteUser, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity ,Alert} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';


const RegisterScreen = ({ navigation }) => {

    const [User, setUser] = useState({});
    const user = auth.currentUser;

    // useEffect(() => {
    //     const dbRef = ref(getDatabase());
    //     get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             console.log(snapshot.val());
    //             setUser(snapshot.val());
    //         } else {
    //             console.log("No data available");
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }, [])

    //to sign out
    const SignOut = () => {
        signOut(auth)
            .then(() => {
                AsyncStorage.clear();
                navigation.navigate("Welcome");
                alert("you singed out successfuly");
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    //to delete user
    const DeleteUser = () => {
        deleteUser(user).then(() => {
            // User deleted.
            AsyncStorage.clear();
            alert("User Deleted")
            navigation.navigate("Welcome");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    //to reset password
    const ResetPassword = () => {
        sendPasswordResetEmail(auth, user.email)
            .then(() => {
                // Password reset email sent!
                // ..
                alert("Password reset email sent!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage)
            });
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />


            <Image style={styles.PhotoStyle} source={
                { uri: "https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c" }}
            />

            <View>
                <Text style={styles.textStyle}> Welcome, {user.displayName}! </Text>
            </View>
            <View>
                <Text style={styles.textStyle}> Your Email is: {user.email} </Text>
            </View>
            <Text> </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={SignOut}>
                    Sign Out
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={DeleteUser}>
                    Delete Email
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={ResetPassword}>
                    reset password
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    PhotoStyle: {
        width: "150px",
        height: "150px",
        // backgroundColor:"blue",
        borderRightWidth: "0px",
        // borderColor:"blue",
        borderRadius: "50%"
    },
    textStyle: {
        paddingTop: 50,
        fontSize: "15px",
        fontWeight: "bold",
    },
    button: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "royalblue",
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 15,
        textAlign: "center",
    },
});
export default RegisterScreen;
