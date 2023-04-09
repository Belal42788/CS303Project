import {  StyleSheet,View,Text,Image,useWindowDimensions,TouchableOpacity,ImageBackground } from "react-native";
import React from "react";
import { ReactDOM } from "react";
import MaterialIcons from  "react-native-vector-icons/MaterialIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
//import { StatusBar } from "expo-status-bar";
import backgroundpic from "../assets/zachary-edmundson-ygqZpaNl_dM-unsplash - Copy.jpg"



function wellcome  ({navigation}){
    const {height}=useWindowDimensions();
return(
    
    <ImageBackground source={require('../assets/2graycc.jpg') }  style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')} >
            <Text style={styles.text}>GET STARTED <FontAwesome name="arrow-right"  size={"100%"} color="white" style={{marginLeft:"12%"}}/></Text> 
        </TouchableOpacity> 
    </ImageBackground >
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent:"flex-end",
       padding:0,
       backgroundColor: 'transparent',
    },
    button:{     
        width: "90%",
        borderRadius: 90,
        height: "8%",
        marginBottom:"30%",
        alignItems: "flex-start",
        justifyContent:"center",
        backgroundColor: "#965ff6",
        borderStyle : "solid",
        borderWidth : 3,
        borderColor:"black",
        
      
    },
    ico:{
        alignSelf:"flex-end",
        marginRight:"10%",
        width :"10%",
        zIndex:0
        

    },
    text:{
        marginLeft:"19%",
       color:"white",
       fontSize:"150%",
       fontWeight:"bold",
       width :"70%"
       
    }
});

export default wellcome; 