import {
    StyleSheet,
    View,
    Text,
    Image,
    useWindowDimensions,
    TouchableOpacity,
    TextInput, ImageBackground 
} from "react-native";
import React, { useState , useEffect } from "react";


export default function LodingScreen({ navigation }) {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigation.navigate("Get Start1");
        },2000);
        return () => clearTimeout(timer);
    },[]);

    return (
        <View style={styles.container}>
            <ImageBackground  resizeMode="stretch" style={styles.container}
                source={require("../assets/Image/bmw-black-hd.jpg")}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: 'auto',
        width: '100%',
    },
});
