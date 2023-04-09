import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import { signOut } from "firebase/auth";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RegisterScreen = () => {
    const user = auth.currentUser;
    const Email = user.email;
    const SignOut = () => {
        signOut(auth)
            .then(() => {
                navigation.navigate("Home");
                alert("you singed out successfuly");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View>
                <Text style={styles.textStyle}> Welcome {Email} </Text>
            </View>
            <Text> </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={SignOut}>
                    Sign Out
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
