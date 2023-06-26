import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import {FontAwesome} from "@expo/vector-icons";




function GetSart2({ navigation }) {

    return (

        <ImageBackground source={require('../assets/Image/Exclusive2.jpg')} style={styles.container}>
            <View style={styles.logocont}>
                <Text style={styles.logoText}>
                    {/* <FontAwesome name={"xing"} size={25} color="white" style={{}} /> */}
                    Luxury</Text>
            </View>

            <View style={styles.topScreenView}>
                <Text style={styles.screenText}>
                    With just a few taps, choose your preferred car from our well maintained fleet and book it instantly.
                </Text>
            </View>
            <View style={styles.buttonscontain}>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
                <TouchableOpacity style={styles.specialbutton}></TouchableOpacity>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Get Start3')} >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Get Start1")}>
                <Text style={styles.backButton}>Back</Text>
            </TouchableOpacity>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "flex-end",
        // padding: 3,
        backgroundColor: 'transparent',

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
        alignContent: "center",
        alignSelf: "center",
        marginBottom: '40%',
        marginTop: '5%',
        textAlign: 'center'

    },

    bottomScreenView: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        width: '80%',
        // marginBottom: '80%',
        paddingTop: '10%'
    },

    button: {
        width: "60%",
        borderRadius: 15,
        height: "8%",
        marginBottom: "6%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        display: "flex",
    },

    ico: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        marginLeft: "5%",
        width: "100%",

    },
    buttonText: {
        color: "black",
        fontSize: 20,
        fontWeight: 700,
        // fontFamily: 'cairo',
        alignSelf: "center",

    },
    buttonscontain: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginBottom: "5%"
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
    logoText: {
        color: "white",
        fontSize: 20,
        fontWeight: 600,
        // fontFamily: 'prompt',
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: "1%",
    },
    screenText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 400,
        // marginTop:'5%',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // fontFamily: 'cairo',
        opacity: 0.8
    },
    backButton: {
        marginBottom: "10%",
        // textDecorationLine: "underline",
        fontSize: 20,
        color: '#d8d8d8',
        // fontFamily: 'cairo',
        fontWeight: 'bold'
    },
});

export default GetSart2; 