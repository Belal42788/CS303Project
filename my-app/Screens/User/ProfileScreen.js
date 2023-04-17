import { StatusBar } from "expo-status-bar";
import auth from "../../firebase/config/firebase-config.js";
import {
    signInWithEmailAndPassword,
    signOut,
    deleteUser,
    sendPasswordResetEmail,
    updateProfile,
    updatePhoneNumber,
} from "firebase/auth";
import { getDatabase, child, get } from "firebase/database";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    ImageBackground
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { doc, setDoc, getFirestore, updateDoc, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firebase } from "../../firebase/config/firebase-config.js";


const ProfileScreen = ({ navigation }) => {
    const user = auth.currentUser;
    const db = getFirestore();
    const UserRef = doc(db, "users", user.uid);
    const [urlPhoto, setUrlPhoto] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [BirthDate, setBirthDate] = useState("");
    const [firstNameMode, setFirstNameMode] = useState(false);
    const [lastNameMode, setLastNameMode] = useState(false);
    const [phoneMode, setPhoneMode] = useState(false);
    const [BirthDateMode, setBirthDateMode] = useState(false);
    
//to get user info
const GetUserInfo = async () => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    setFirstName(docSnap.data().firstName);
    setLastName(docSnap.data().lastName);
    setPhone(docSnap.data().phone);
    setEmail(docSnap.data().email);
    setBirthDate(docSnap.data().BirthDate);
    
    
    } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    }
};

//get user info when the screen is loaded
useEffect(() => {
    GetUserInfo();
}, []);

//to update First Name
const UpdateFirstName = async () => {
    if(firstName == ""){
        alert("Please enter your First Name");
    }else{
        await updateDoc(UserRef, {
            firstName: firstName,
        });
        setFirstNameMode(false);
        alert("First Name Updated");
    }
};

//to update Last Name
const UpdateLastName = async () => {
    if(lastName == ""){
        alert("Please enter your Last Name");
    }else{
        await updateDoc(UserRef, {
            lastName: lastName,
        });
        setLastNameMode(false);
        alert("Last Name Updated");
    }
};

//to update Phone
const UpdatePhone = async () => {
    if(phone == ""){
        alert("Please enter your Phone");
    }else{
        await updateDoc(UserRef, {
            phone: phone,
        });
        setPhoneMode(false);
        alert("Phone Updated");
    }
};

//to update BirthDate
const UpdateBirthDate = async () => {
    if(BirthDate == ""){
        alert("Please enter your BirthDate");
    }else{
        await updateDoc(UserRef, {
            BirthDate: BirthDate,
        });
        setBirthDateMode(false);
        alert("BirthDate Updated");
    }
};

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
//handle First Name mode
    const handleFirstNameMode = () => {
        if(firstNameMode){
            setFirstNameMode(false);
        }else{
            setFirstNameMode(true);
        }
    }
//handle Last Name mode
    const handleLastNameMode = () => {
        if(lastNameMode){
            setLastNameMode(false);
        }else{
            setLastNameMode(true);
        }
    }
//handle Phone mode
    const handlePhoneMode = () => {
        if(phoneMode){
            setPhoneMode(false);
        }else{
            setPhoneMode(true);
        }
    }
//handle BirthDate mode
    const handleBirthDateMode = () => {
        if(BirthDateMode){
            setBirthDateMode(false);
        }else{
            setBirthDateMode(true);
        }
    }



    return (
        <ImageBackground source={require('../../assets/reg3.jpg')} style={styles.container}>
            <StatusBar style="auto" />

            <Image
                style={styles.PhotoStyle}
                source={{
                    uri: user.photoURL ? user.photoURL : "https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c",
                }}
            />
            
            {
                firstNameMode ?
                    (
                    <><View>
                            <TextInput
                                style={styles.input}
                                placeholder="First Name"
                                value={firstName}
                                onChangeText={ setFirstName }
                                />
                        </View>
                        <TouchableOpacity>
                                <Text style={styles.buttonText} onPress={UpdateFirstName}>
                                    Updata First Name
                                </Text>
                        </TouchableOpacity></>
                    ):(
                        <><View>
                            <Text style={styles.textStyle}> First Name, {firstName}! </Text>
                        </View><TouchableOpacity>
                                <Text style={styles.buttonText}  onPress={handleFirstNameMode}>
                                    Updata First Name
                                </Text>
                            </TouchableOpacity></>
                    )
            }
            

            {
                lastNameMode ?
                    (
                    <><View>
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                                value={lastName} />
                        </View><TouchableOpacity>
                                <Text style={styles.buttonText} onPress={UpdateLastName}>
                                    Updata Last Name
                                </Text>
                            </TouchableOpacity></>
                    ):(
                        <><View>
                            <Text style={styles.textStyle}> Last Name, {lastName}! </Text>
                        </View><TouchableOpacity>
                                <Text style={styles.buttonText} onPress={handleLastNameMode}>
                                    Updata Last Name
                                </Text>
                            </TouchableOpacity></>
                    )
            }
            

            <View>
                <Text style={styles.textStyle}> Your Email is: {email} </Text>
            </View>

            {
                BirthDateMode ?
                    (
                    <><View>
                            <TextInput
                                style={styles.input}
                                placeholder="Birth Date"
                                onChangeText={(BirthDate) => setBirthDate(BirthDate)}
                                value={BirthDate} />
                        </View><TouchableOpacity>
                                <Text style={styles.buttonText} onPress={UpdateBirthDate}>
                                    Updata Birth Date
                                </Text>
                            </TouchableOpacity></>
                    ):(
                        <><View>
                            <Text style={styles.textStyle}> Birth Date is: {BirthDate} </Text>
                        </View><TouchableOpacity>
                                <Text style={styles.buttonText} onPress={handleBirthDateMode}>
                                    Updata Birth Date
                                </Text>
                            </TouchableOpacity></>
                    )
            }
            

            {
                phoneMode ?
                    (
                    <><View>
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number"
                                onChangeText={(phone) => setPhone(phone)}
                                value={phone} />
                        </View><TouchableOpacity>
                                <Text style={styles.buttonText} onPress={updatePhoneNumber}>
                                    Updata Phone Number
                                </Text>
                            </TouchableOpacity></>
                    ):(
                        <><View>
                            <Text style={styles.textStyle}> Phone Number is: {phone} </Text>
                        </View><TouchableOpacity>
                                <Text style={styles.buttonText} onPress={handlePhoneMode}>
                                    Updata Phone Number
                                </Text>
                            </TouchableOpacity></>
                    )
            }
            

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
