import {  StyleSheet,View,Text,Image,useWindowDimensions,TouchableOpacity } from "react-native";
import React from "react";
//import { StatusBar } from "expo-status-bar";
import logo from "../assets/360_F_361521131_tvclR3GrsVQBFVsUe1EPNFgH2MWIN1w7.jpg"



function wellcome  ({navigation}){
    const {height}=useWindowDimensions();

return(
    <View style={styles.container}>
        <Image source={logo} style={[styles.logo,{height:height*0.2}]}/>
        <Text  style={styles.title}>wlcome to my first app </Text>
        <Text  style={styles.title1}>this app is taking about  jdshf sdbjasdvb dashfsahf sdakhfaksjdf hasdkfhlask </Text>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')} >
            <Text>GET STARTED</Text>
        </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
       padding:20,
    },
    logo:{
        width: "70%",
        maxWidth:300,
        maxHeight:300,
        marginBottom:10
    },
    title:{
        fontWeight:"bold",
        fontSize:50,
        marginBottom:20
    },
    title1:{       
        fontSize:20,
        color:"3A3967",
         marginBottom:20
    },
    button:{       
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "royalblue",
    }
});

export default wellcome; 