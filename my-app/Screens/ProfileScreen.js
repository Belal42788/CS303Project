import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import { signOut ,deleteUser} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RegisterScreen = ({navigation}) => {
    const [User, setUser] = useState({});
    const user = auth.currentUser;
    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setUser(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])
    const SignOut = () => {
        signOut(auth)
            .then(() => {
                navigation.navigate("Welcome");
                alert("you singed out successfuly");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    const DeleteUser =()=>{
        deleteUser(user).then(() => {
            // User deleted.
            console.log("User Deleted")
            navigation.navigate("Welcome");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View>
                <Text style={styles.textStyle}> Welcome user {User.name} </Text>
            </View>
            <View>
                <Text style={styles.textStyle}> Your Email {User.email} </Text>
            </View>
            <View>
                <Text style={styles.textStyle}> and Your age {User.age} </Text>
            </View>
            <Text> </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={SignOut}>
                    Sign Out
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={DeleteUser}>
                    Deleted Email
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
