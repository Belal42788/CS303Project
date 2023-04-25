import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import Footer from "../Layouts/Footer.js";
import { collection, addDoc, getFirestore, setDoc, doc, docRef  } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../firebase/config/firebase-config.js";



export const AddM = ({ navigation }) => {
    const [nameModel, setnameModel] = useState("");

    const [uri, seturi] = useState("https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c");

    //to PickImage
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            console.log('permission to access media library is required')
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync();
        console.log(result);
        if (!result.canceled) {
            return result.uri;
        }
    };

    //to update Photo
    const updatePhoto = async () => {
        const uri = await pickImage();
        if(nameModel==""){
            alert("please Enter name of Model");
            return ;
        }
        const filename = nameModel;
        const ref = firebase.storage().ref().child("images/" + filename);

        const response = await fetch(uri);
        const blob = await response.blob();
        const snapshot = await ref.put(blob);
        console.log('Image uploaded successfully');

        const downloadURL = await snapshot.ref.getDownloadURL();

        seturi(downloadURL);
    }

    const addM = async () => {
        if(uri=="https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c"){
            alert("Please choose Image");
        }
        if(nameModel!=""){
            const db = getFirestore();
            const docRef = doc(db, "Models", nameModel.toUpperCase());
            const colRef = collection(docRef, "M")
            await setDoc(doc(colRef,  "Info"), {
                name: nameModel,
                uri: uri
            });
            alert("done");
        }else{
            alert("please Enter name of Model");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Add Model
            </Text>


            <TouchableOpacity onPress={updatePhoto} style={styles.ImageStyle}>
                <Image
                    style={styles.PhotoStyle}
                    source={{
                        uri: uri,
                    }}

                />
            </TouchableOpacity>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="nameModel"
                    placeholderTextColor="#003f5c"
                    value={nameModel}
                    onChangeText={setnameModel}
                />
            </View>


            <TouchableOpacity style={styles.loginBtn} onPress={addM}>
                <Text style={styles.buttonText} >
                    Add
                </Text>
            </TouchableOpacity>
            <Footer navigation={navigation} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    placeholderStyles: {
        color: "grey",
    },
    dropdownmodel: {
        marginHorizontal: 10,
        width: "85%",
        marginBottom: 15,
        marginLeft: "6%",
        zIndex: 1,
    },
    dropdownCompany: {
        marginHorizontal: 10,
        marginBottom: 15,
        zIndex: 1,
    },
    dropdown: {
        borderColor: "#B7B7B7",
        height: 50,
        zIndex: 1,
    },
    select1: {
        flexDirection: "row",
        zIndex: 1,
    },
    select2: {

        flexDirection: "row",
        zIndex: 2,
    },
    inputView: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 15,
        width: "90%",
        height: "7%",
        fontFamily: 'cairo',
        marginBottom: "5px",
        alignItems: "center",
        textAlign: "left",
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
    }, TextInput: {
        fontSize: "120%",
        width: "96%",
        height: "90%",
        textAlign: "left",
        color: "black",
        fontFamily: 'cairo',
        fontWeight: "700",
    },
    loginBtn: {
        width: "85%",
        borderRadius: 13,
        height: "8%",
        marginTop: "2%",
        marginLeft: "8%",
        justifyContent: "center",
        alignItems: "flex-end",
        alignContent: "center",
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "black",
        display: "flex",
    },
    buttonText: {
        color: "black",
        fontSize: "200%",
        fontWeight: "700",
        fontFamily: 'cairo',
        alignSelf: "center",
    },
    PhotoStyle: {
        width: "100px",
        height: "100px",
        // backgroundColor:"blue",
        borderRightWidth: "0px",
        // borderColor:"blue",
        borderRadius: "50%",
        // marginTop: 0,
    },
    ImageStyle: {
        margin: "5%",
        marginLeft: "35%"
    }
});
