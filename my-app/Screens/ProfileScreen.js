import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import {
    signInWithEmailAndPassword,
    signOut,
    deleteUser,
    sendPasswordResetEmail,
} from "firebase/auth";
import { getStorage, getDatabase, ref, child, get } from "firebase/database";
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

 import { storage } from "../firebase/config/firebase-config.js";
 import { getDownloadURL,uploadBytes, ref } from "firebase/storage";



const RegisterScreen = ({ navigation }) => {
    const user = auth.currentUser;
    const db = getFirestore();
    const UserRef = doc(db, "users", user.uid);
    const [urlPhoto, setUrlPhoto] = useState(null);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState(null);



    AsyncStorage.getItem("urlPhoto").then((value) => {
        if (value != null) {
            setUrlPhoto(value);
        }
    });
    ////////////////////////////////

     useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setUser(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

//////////////////////////////////////////////
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
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        if (!result.canceled) {
            var name = result.uri.substring(result.uri.lastIndexOf('/') + 1, result.uri.length);
            setImage((result.assets[0].uri));
        // const uploadurl=await uploadImageAsync (result.assets[0].uri);//me
         //setImage(uploadurl);
            setFileName(name);
            AsyncStorage.setItem("urlPhoto", (result.assets[0].uri));
            console.log(image);
            console.log(fileName);
        }


    };
///////////////////////////////////////////////////////////////////////
const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function () {
            reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', image, true);
        xhr.send(null);
    })
    const ref = firebase.storage().ref().child(Pictures/Image3)
    const snapshot = ref.put(blob)
    snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
            setUploading(true)
        },
        (error) => {
            setUploading(false)
            console.log(error)
            return
        },
        () => {
            snapshot.snapshot.ref.getDownloadURL().then((url) => {
                setUploading(false)
                console.log("Download URL: ", url)
                setImage(url)
                return url
            })
        }
    )
}
////////////////////////////////////////////////////////////////////
    //to update Photo
    const updatePhoto = async() => {
        pickImage();
        
        // const mountainImagesRef = ref(storage, 'images/mountains.jpg');
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const ref = firebase.storage().ref().child(`images/${Date.now()}`);
        await ref.put(blob);
        Alert.alert('Upload successful', 'Your image has been uploaded to Firebase storage!', [{ text: 'OK' }]);
        setImage(null);
    }

    //to get urlPhoto
    function getUrlPhoto() {
        if (urlPhoto != null) {
            return urlPhoto;
        }
        else {
            return "https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c";
        }
    }

    return (
        <ImageBackground source={require('../assets/reg3.jpg')} style={styles.container}>
            <StatusBar style="auto" />

            <Image
                style={styles.PhotoStyle}
                source={{
                    uri: getUrlPhoto(),
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
export default RegisterScreen;
