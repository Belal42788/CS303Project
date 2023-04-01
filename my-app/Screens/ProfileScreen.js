import { StatusBar } from "expo-status-bar";
import auth from '../firebase/config/firebase-config.js'
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";

const RegisterScreen = () => {
    const user = auth.currentUser;
    const Email = user.email;
    
    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/favicon.png")} />
            <StatusBar style="auto" />

            <View>
                <Text style={{ paddingTop: 50 }}> wellcome {Email} </Text>
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
export default RegisterScreen