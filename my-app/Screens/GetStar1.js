import { StyleSheet, View, Text,TouchableOpacity, ImageBackground} from "react-native";
import React from "react";
import {FontAwesome}  from "@expo/vector-icons"





function GetStar1({ navigation }) {
    return (

        <ImageBackground source={require('../assets/Image/Exclusive1.jpg')} style={styles.container}>
            <View style={styles.logocont}>
                <Text style={styles.logoText}><FontAwesome name={"xing"} size={25} color="white" style={{}} /> Luxury</Text>
            </View>

            <View style={styles.topScreenView}>
                <Text style={styles.screenTopText}>Luxury Cars.</Text>
                <Text style={styles.screenTopText}>Enjoy the Permium</Text>
            </View>
            <Text style={styles.screenBottomText}>
                Find a variety of the car of your dreams, at a good price and quality premium.
            </Text>

            <View style={styles.buttonscontain}>
                <TouchableOpacity style={styles.specialbutton}></TouchableOpacity>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Get Start2')} >
                <Text style={styles.buttonText}>GET STARTED </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.skipButton}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signInButton}>Already have an account? SIGN IN</Text>
            </TouchableOpacity>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: 'transparent',
        height: "100%"

    },
    logocont: {
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        marginBottom: "1%",
        marginTop: "1%",
    },

    topScreenView: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        marginBottom: '70%'
    },
    buttonscontain: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: "5%",
        marginBottom: "1%"
    },
    upperbuttons: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        padding: 0.25,
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "#d8d8d8",
        marginHorizontal: 5,
    },
    specialbutton: {
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        width: 17,
        height: 17,
        borderRadius: 12.5,
        marginHorizontal: 5,
    },
    bottomScreenView: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '20%',
        // marginBottom: '1%'
        margin: "5%",
    },
    button: {
        width: "90%",
        borderRadius: 18,
        height: "8%",
        marginBottom: "2%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        display: "flex",
        marginBottom: "3%",
        marginTop: "10%"
    },

    ico: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        marginLeft: "5%",
        width: "100%",

    },
    buttonText: {
        color: "black",
        fontSize: 25,
        fontWeight: 700,
        // fontFamily: 'cairo',
        alignSelf: "center",

    },
    logoText: {
        color: "white",
        fontSize: 20,
        fontWeight: 600,
        // fontFamily: 'prompt',
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: "1%",
    },
    screenTopText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 400,
        marginTop:'5%',
        alignContent: 'center',
        width: "100%",
        textAlign: "center",
        // opacity: "95%",
    },
    screenBottomText: {
        color: 'white',
        fontWeight: 400,
        fontSize: 19,
        // fontFamily: 'cairo',
        // lineHeight: "1.2",
        width: "100%",
        opacity: 0.8,
        textAlign: "center",
    },
    signInButton: {
        marginBottom: "6%",
        marginTop: "3%",
        // textDecorationLine: "underline",
        fontSize: 16,
        color: '#d8d8d8',
        // fontFamily: 'cairo'
    },
    skipButton: {
        marginBottom: "1%",
        // textDecorationLine: "underline",
        fontSize: 20,
        color: '#d8d8d8',
        // fontFamily: 'cairo',
        fontWeight: 'bold'
    }
});

export default GetStar1; 