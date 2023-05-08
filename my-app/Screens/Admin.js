import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import {
    signInWithEmailAndPassword,
    signOut,
    deleteUser,
    sendPasswordResetEmail,
    updateProfile,
    updatePhoneNumber,
} from "firebase/auth";
import { getDatabase, child, get } from "firebase/database";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    ImageBackground,
    ScrollView,
} from "react-native";
import {
    doc,
    setDoc,
    getFirestore,
    updateDoc,
    getDoc,
    addDoc,
    deleteDoc,
} from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firebase } from "../firebase/config/firebase-config.js";
import Footer from "../Layouts/Footer.js";
import DropDownPicker from 'react-native-dropdown-picker';

const Admin = ({ navigation }) => {
    const user = auth.currentUser;
    const db = getFirestore();
    const UserRef = doc(db, "users", user.uid);
    const [urlPhoto, setUrlPhoto] = useState(null);


    //to get user info
    const GetUserInfo = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

        } else {

        }
    };

    //get user info when the screen is loaded
    useEffect(() => {
        GetUserInfo();
    }, []);

    //to update First Name
    const UpdateFirstName = async () => {
        if (firstName == "") {
            alert("Please enter your First Name");
        } else {
            await updateDoc(UserRef, {
                firstName: firstName,
            });
            setFirstNameMode(false);
            alert("First Name Updated");
        }
    };




    const DeleteUser = async () => {

        await deleteDoc(UserRef)
            .then(() => {
                // User deleted.
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        window.location.reload(true);
    };



    //to PickImage
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            console.log("permission to access media library is required");
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
        console.log(uri);
        setUrlPhoto(uri);
        const filename = user.uid;
        const ref = firebase
            .storage()
            .ref()
            .child("images/" + filename);

        const response = await fetch(uri);
        const blob = await response.blob();
        const snapshot = await ref.put(blob);
        console.log("Image uploaded successfully");

        const downloadURL = await snapshot.ref.getDownloadURL();

        setUrlPhoto(downloadURL);

        await updateProfile(auth.currentUser, {
            photoURL: downloadURL,
        })
            .then(() => {
                console.log("user profile added");
            })
            .catch((error) => {
                alert(error.message);
            });

        window.location.reload(true);
    };


    return (
        <LinearGradient style={styles.container} colors={["#1c2834", "#d0a20e"]}>



            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => { navigation.navigate('AddBrand') }}>
                    Add Brand
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => { navigation.navigate('UpdateBrand') }}>
                    Update Brand
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => { navigation.navigate('BlankCar') }}>
                    Add Model
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => { navigation.navigate('UpdateModel') }}>
                    Update Model
                </Text>
            </TouchableOpacity>


            <Footer navigation={navigation} />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
       minHeight: '101vh',
    maxHeight: 'auto',
    height:'auto',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignContent:'space-around',
    alignItems:'center',
    
    },
    textStyle: {
        fontSize: 'auto',
        fontWeight: "bold",
        color: "#d8d8d8",
        fontFamily: "cairo",
    },
    button: {
        width: "80%",
        borderRadius: 13,
        height: '10%',
        alignItems: "center",
        alignContent: "space-around",
        justifyContent: "space-evenly",
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "black",
        display: "flex",
        margin:'auto',
       marginTop:"10%",
       marginBottom:"2%",
       gap:'auto',
        backgroundColor: "#ce9e04",
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: '120%',
        textAlign: "center",
        fontFamily: "cairo",
    },
    PhotoStyle: {
        width: "100%",
        height: "100px",
        // backgroundColor:"blue",
        borderRightWidth: "0px",
        // borderColor:"blue",
        // borderRadius: "50%",
        // marginTop: 0,
    },
    ImageStyle:{
        margin:"5%"
    }
});
export default Admin;
