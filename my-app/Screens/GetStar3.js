import { StyleSheet, View, Text, Image, useWindowDimensions, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome"




function GetSart3({ navigation }) {
    return (

        <ImageBackground source={require('../assets/Image/Exclusive2.jpg')} style={styles.container}>
            <View style={styles.logocont}>
                <Text style={styles.logoText}>
                    {/* <FontAwesome name="xing" size={"25px"} color="white" style={{}} />  */}
                    Luxury</Text>
            </View>
            
            <View style={styles.topScreenView}>
                <Text style={styles.screenText}>
                    What are you waiting for?{'\n'}{'\n'}create an account and start your journey Right NOW!
                </Text>
            </View>
            <Text>   </Text>
            <View style={styles.buttonscontain}>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
                <TouchableOpacity style={styles.upperbuttons}></TouchableOpacity>
                <TouchableOpacity style={styles.specialbutton}></TouchableOpacity>
            </View>
            <Text>   </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')} >
                <Text style={styles.buttonText}>LET'S GO!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Get Start2")}>
                <Text style={styles.backButton}>Back</Text>
            </TouchableOpacity>
            <Text>   </Text>
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
        width: "100%",
        flex: 1,
        alignItems: 'center',
        alignContent: "center",
        alignSelf: "center",
        marginBottom: '40%',
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
    buttonscontain: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        // marginTop: "2%",
        marginBottom: -3
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

    ico: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        marginLeft: "5%",
        width: "100%",

    },
    buttonText: {
        color: "black",
        fontSize: 19,
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
    screenText: {
        width: "100%",
        color: 'white',
        fontSize: 20,
        fontWeight: 400,
        marginTop:'5%',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // fontFamily: 'cairo',
        opacity: 0.8
    },
    backButton: {
        marginBottom: "5%",
        // textDecorationLine: "underline",
        fontSize: 20,
        color: '#d8d8d8',
        // fontFamily: 'cairo',
        fontWeight: 'bold'
    },
});

export default GetSart3; 