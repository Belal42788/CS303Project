import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import {
    signInWithEmailAndPassword,
    signOut,
    deleteUser,
    sendPasswordResetEmail,
    updateProfile,
} from "firebase/auth";
import { getDatabase, child, get } from "firebase/database";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ImageBackground
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { doc, setDoc, getFirestore, updateDoc, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firebase } from "../firebase/config/firebase-config.js";


const ProfileScreen = ({ navigation }) => {
    const user = auth.currentUser;
    const db = getFirestore();
    const UserRef = doc(db, "users", user.uid);
    const [urlPhoto, setUrlPhoto] = useState(null);

    useEffect(() => {
        setUrlPhoto(user.urlPhoto);
    }, [user])

    //to sign out
    const SignOut = () => {
        signOut(auth)
            .then(() => {
                AsyncStorage.clear();
                alert("you singed out successfuly");
                window.location.reload(true);
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    //to delete user
    const DeleteUser = () => {
        deleteUser(user)
            .then(() => {
                // User deleted.
                AsyncStorage.clear();
                alert("User Deleted");
                window.location.reload(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

        deleteDoc(UserRef)
            .then(() => {
                // User deleted.
                AsyncStorage.clear();
                alert("User Deleted");
                window.location.reload(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    //to reset password
    const ResetPassword = () => {
        sendPasswordResetEmail(auth, user.email)
            .then(() => {
                // Password reset email sent!
                // ..
                alert("Password reset email sent!");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
            });
    };


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
        console.log(uri);
        setUrlPhoto((uri));
        const filename = user.uid;
        const ref = firebase.storage().ref().child("images/" + filename);

        const response = await fetch(uri);
        const blob = await response.blob();
        const snapshot = await ref.put(blob);
        console.log('Image uploaded successfully');

        const downloadURL = await snapshot.ref.getDownloadURL();

        setUrlPhoto(downloadURL);

        updateProfile(auth.currentUser, {
            photoURL: downloadURL,
        })
            .then(() => {
                console.log("user profile added");
            })
            .catch((error) => {
                alert(error.message);
            });
            window.location.reload(true);
    }


    return (
        <ImageBackground source={require('../assets/reg3.jpg')} style={styles.container}>
            <StatusBar style="auto" />

            <Image
                style={styles.PhotoStyle}
                source={{
                    uri: user.photoURL ? user.photoURL : "https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c",
                }}
            />

            <View>
                <Text style={styles.textStyle}> Welcome, {user.displayName}! </Text>
            </View>
            <View>
                <Text style={styles.textStyle}> Your Email is: {user.email} </Text>
            </View>
            <Text> </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={updatePhoto}>
                    Updata Photo
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={SignOut}>
                    Sign Out
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={DeleteUser}>
                    Delete Email
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={ResetPassword}>
                    reset password
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    PhotoStyle: {
        width: "150px",
        height: "150px",
        // backgroundColor:"blue",
        borderRightWidth: "0px",
        // borderColor:"blue",
        borderRadius: "50%",
    },
    textStyle: {
        paddingTop: 50,
        fontSize: "15px",
        fontWeight: "bold",
        color: '#d8d8d8'
    },
    button: {
        width: "70%",
        borderRadius: 18,
        height: 50,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: "center",
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        display: 'flex',
        marginTop: 10,
        backgroundColor: "#ce9e04",
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'cairo'
    },
});
export default ProfileScreen;
