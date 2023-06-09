import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import Footer from "../Layouts/Footer.js";
import { collection, addDoc, getFirestore, setDoc, doc, docRef, getDocs } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../firebase/config/firebase-config.js";
import BackButton from '../Components/BackButton.js';
import { LinearGradient } from "expo-linear-gradient";



export const AddBrand = ({ navigation }) => {
    const [BrandName, setBrandName] = useState("");

    const [uri, seturi] = useState("https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/uploadcar.png?alt=media&token=d89fbcd8-a45b-4f0e-8f77-8c649a08242a");

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
            seturi(result.uri);
        }
    };

    //to update Photo
    const updatePhoto = async () => {
        const uriI = uri;
        try {
            if (BrandName == "") {
                throw Error("");
            }
        } catch (error) {
            alert("please Enter name of Brand");
            return;
        }
        const filename = BrandName;
        const ref = firebase.storage().ref().child("images/" + filename);

        const response = await fetch(uriI);
        const blob = await response.blob();
        const snapshot = await ref.put(blob);
        console.log('Image uploaded successfully');

        const downloadURL = await snapshot.ref.getDownloadURL();

        seturi(downloadURL);
        return downloadURL;
    }

    const AddBrand = async () => {
        if (uri == "https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c") {
            alert("Please choose Image");
        }
        if (BrandName != "") {
            const db = getFirestore();
            const colRefB = collection(db, "Brands");
            const docsSnap = await getDocs(colRefB);
            try {
                docsSnap.forEach(doc => {
                    if (doc.id == BrandName.toUpperCase()) {
                        throw "exit";
                    }
                })
            } catch (error) {
                alert("This Brand is alredy exist.");
                return;
            }
            const uriL=await updatePhoto();
            const docRef = doc(db, "Brands", BrandName.toUpperCase());
            await setDoc(docRef, {
                Car:[]
            });

            const colRef = collection(docRef, "B");
            await setDoc(doc(colRef, "Info"), {
                name: BrandName,
                uri: uriL
            });
            alert("done");
        } else {
            alert("please Enter name of Brand");
        }
    };

    return (
        <LinearGradient style={styles.container} colors={["#1c2834", "#d0a20e"]}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 30 }}>
                <BackButton />
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginRight: 30 }}>
                    Add Brand
                </Text>
            </View>
            <TouchableOpacity onPress={pickImage} style={styles.ImageStyle}>
                <Image
                    style={styles.PhotoStyle}
                    source={{
                        uri: uri,
                    }}
                />
            </TouchableOpacity>
            <Text>   </Text>
            <Text>   </Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Brand Name"
                    placeholderTextColor="#003f5c"
                    value={BrandName}
                    onChangeText={setBrandName}
                />
            </View>


            <TouchableOpacity style={styles.loginBtn} onPress={AddBrand}>
                <Text style={styles.buttonText} >
                    Add
                </Text>
            </TouchableOpacity>
            <Footer navigation={navigation} />

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
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
    dropdownBrand: {
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
    },
    TextInput: {
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
        width: 120,
        height: 120,
        // backgroundColor:"blue",
        // borderColor:"blue",
        borderRadius: "50%",
        // marginTop: 0
        resizeMode: 'contain'
    },
    ImageStyle: {
        margin: "5%",
        marginLeft: "35%",
    },

});
