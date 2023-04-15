
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
// import localImage from './asset/image.jpg';
export default function HomePage({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
            <Text style ={styles.textHome}>Welcome to our simple App</Text>
            
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text> </Text>

          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white'
  },
  textHome : {
    fontSize:25,
    marginBottom:'30%',
    alignItems: "center",
    justifyContent: "center",
    width: 10,
    fontWeight:"bold"
  },
  button: {
    width: 10,
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