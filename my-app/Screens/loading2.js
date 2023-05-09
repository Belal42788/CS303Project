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
export default function Loading2({ navigation }) {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigation.navigate("Main Screen");
        },5000);
        return () => clearTimeout(timer);
    },[]);

    return (
        <View style={styles.container}>
            <ImageBackground  resizeMode="center" style={styles.container}
                source={require("../assets/104743-yellow-car-loading.gif")}
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
