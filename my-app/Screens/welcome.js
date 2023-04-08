import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Styles from "./Styles"


function Wellcome({ navigation }) {
    return (
        <View style={Styles.body}>
            <View style={Styles.container}>
                <Text style={Styles.title}>   Welcome</Text>
                <Text style={Styles.title}>      To</Text>
                <Text style={Styles.title}>  Car World</Text>
                <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Register')} >
                    <Text style={Styles.titleButon}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Wellcome; 