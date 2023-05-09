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
  ScrollView
} from "react-native";
import { doc, setDoc, getFirestore, updateDoc, getDoc, addDoc, deleteDoc } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firebase } from "../firebase/config/firebase-config.js";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Footer from "../Layouts/Footer.js";
import { LinearGradient } from "expo-linear-gradient";


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

  //to update Last Name
  const UpdateLastName = async () => {
    if (lastName == "") {
      alert("Please enter your Last Name");
    } else {
      await updateDoc(UserRef, {
        lastName: lastName,
      });
      setLastNameMode(false);
      alert("Last Name Updated");
    }
  };

  //to update Phone
  const UpdatePhone = async () => {
    if (phone == "") {
      alert("Please enter your Phone");
    } else {
      await updateDoc(UserRef, {
        phone: phone,
      });
      setPhoneMode(false);
      alert("Phone Updated");
    }
  };

  //to update BirthDate
  const UpdateBirthDate = async () => {
    if (BirthDate == "") {
      alert("Please enter your BirthDate");
    } else {
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
  const SignOut = async () => {
    await signOut(auth)
      .then(() => {

        alert("you singed out successfuly");

      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
    window.location.reload(true);
  };

  //to delete user
  const DeleteUser = async () => {
    await deleteUser(user)
      .then(() => {
        // User deleted.
        alert("User Deleted");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });

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
  }
  //handle First Name mode
  const handleFirstNameMode = () => {
    if (firstNameMode) {
      setFirstNameMode(false);
    } else {
      setFirstNameMode(true);
    }
  }
  //handle Last Name mode
  const handleLastNameMode = () => {
    if (lastNameMode) {
      setLastNameMode(false);
    } else {
      setLastNameMode(true);
    }
  }
  //handle Phone mode
  const handlePhoneMode = () => {
    if (phoneMode) {
      setPhoneMode(false);
    } else {
      setPhoneMode(true);
    }
  }
  //handle BirthDate mode
  const handleBirthDateMode = () => {
    if (BirthDateMode) {
      setBirthDateMode(false);
    } else {
      setBirthDateMode(true);
    }
  }



  return (

    <LinearGradient style={[styles.container]} colors={["#1c2834", "#d0a20e"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} locations={[0, 0.8]}>
      <StatusBar style="auto" />
      <View style={styles.logocont}>
        <Text style={styles.logoText}><FontAwesome name="xing" size={"25px"} color="white" style={{}} /> Luxury</Text>
      </View>

      <TouchableOpacity onPress={updatePhoto} style={styles.photoContainer}>
        <Image
          source={{
            uri: user.photoURL,
          }}
          style={styles.photo}
        />
        <TouchableOpacity
          onPress={updatePhoto}
          style={styles.updatePhotoButton}
        >
          <Text style={styles.updatePhotoButtonText}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>




      {
        firstNameMode ?
          (
            <>
              <View>
                <Text style={styles.label}> First Name: </Text>
                <View style={styles.row}>
                  <View style={styles.textFieldBox}>
                    <TextInput
                      style={styles.textFieldStyle}
                      placeholder=" New First Name"
                      placeholderTextColor="#003f5c"
                      onChangeText={(firstName) => setFirstName(firstName)}
                      value={firstName}
                    />
                  </View>
                  <TouchableOpacity onPress={UpdateFirstName} style={styles.editButton}>
                    <Image
                      source={require("../assets/Image/saveButton.png")}
                      style={styles.editImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <>
              <View>
                <Text style={styles.label}> First Name: </Text>
                <View style={styles.row}>
                  <View style={styles.textFieldBox}>
                    <Text style={styles.textFieldStyle}>{firstName}</Text>
                  </View>
                  <TouchableOpacity onPress={handleFirstNameMode} style={styles.editButton}>
                    <Image
                      source={require("../assets/Image/editButton.png")}
                      style={styles.editImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )
      }


      {
        lastNameMode ?
          (
            <>
              <View>
                <Text style={styles.label}> Last Name: </Text>
                <View style={styles.row}>
                  <View style={styles.textFieldBox}>
                    <TextInput
                      style={styles.textFieldStyle}
                      placeholder=" New Last Name"
                      placeholderTextColor="#003f5c"
                      onChangeText={(lastName) => setLastName(lastName)}
                      value={lastName}
                    />
                  </View>
                  <TouchableOpacity onPress={UpdateLastName} style={styles.editButton}>
                    <Image
                      source={require("../assets/Image/saveButton.png")}
                      style={styles.editImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <>
              <View>
                <Text style={styles.label}> Last Name: </Text>
                <View style={styles.row}>
                  <View style={styles.textFieldBox}>
                    <Text style={styles.textFieldStyle}>{lastName}</Text>
                  </View>
                  <TouchableOpacity onPress={handleLastNameMode} style={styles.editButton}>
                    <Image
                      source={require("../assets/Image/editButton.png")}
                      style={styles.editImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )
      }

      <View>
        <Text style={styles.label}>Email:  </Text>
        <View style={styles.row}>
          <View style={styles.textFieldBox}>
            <Text style={styles.textFieldStyle}>{email}</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Image
              style={styles.editImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {
        BirthDateMode ?
          (
            <>
              <View>
                <Text style={styles.label}> Birth Date: </Text>
                <View style={styles.row}>
                  <View style={styles.textFieldBox}>
                    <TextInput
                      style={styles.textFieldStyle}
                      placeholder=" New Birth Date"
                      placeholderTextColor="#003f5c"
                      onChangeText={(BirthDate) => setBirthDate(BirthDate)}
                      value={BirthDate}
                    />
                  </View>
                  <TouchableOpacity onPress={UpdateBirthDate} style={styles.editButton}>
                    <Image
                      source={require("../assets/Image/saveButton.png")}
                      style={styles.editImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <>
              <View>
                <Text style={styles.label}> Birth Date: </Text>
                <View style={styles.row}>
                  <View style={styles.textFieldBox}>
                    <Text style={styles.textFieldStyle}>{BirthDate} </Text>
                  </View>
                  <TouchableOpacity onPress={handleBirthDateMode} style={styles.editButton}>
                    <Image
                      source={require("../assets/Image/editButton.png")}
                      style={styles.editImage}
                    />
                  </TouchableOpacity>
                </View>
              </View></>
          )
      }


      {
        phoneMode ?
          (
            <>
              <View>
                <Text style={styles.label}> Phone Number: </Text>
                <View style={styles.row}>
                  <View style={styles.textFieldBox}>
                    <TextInput
                      style={styles.textFieldStyle}
                      placeholder=" New Phone Number"
                      placeholderTextColor="#003f5c"
                      onChangeText={(phone) => setPhone(phone)}
                      value={phone}
                    />
                  </View>
                  <TouchableOpacity onPress={UpdatePhone} style={styles.editButton}>
                    <Image
                      source={require("../assets/Image/saveButton.png")}
                      style={styles.editImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <>
              <View>
                <Text style={styles.label}> Phone Number: </Text>
                <View style={styles.row}>
                  <View style={styles.textFieldBox}>
                    <Text style={styles.textFieldStyle}>{phone}</Text>
                  </View>
                  <TouchableOpacity onPress={handlePhoneMode} style={styles.editButton}>
                    <Image
                      source={require("../assets/Image/editButton.png")}
                      style={styles.editImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )
      }

      <TouchableOpacity style={styles.button} onPress={SignOut}>
        <Text style={styles.buttonText} >
          Sign Out
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={DeleteUser}>
        <Text style={styles.buttonText}>
          Delete Email
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ResetPassword}>
        <Text style={styles.buttonText} >
          reset password
        </Text>
      </TouchableOpacity>

      <Footer navigation={navigation} />
    </LinearGradient>



  );
};

const styles = StyleSheet.create({
  container: {
    minHeight:'110vh',
    height: 'auto',
    alignItems: "center",
    justifyContent: "center",
    
    width: '100%',
  },
  logoText: {
    color: "white",
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: 'prompt',
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: "1%",
  },
  logocont: {
    alignItems: "center",
    // justifyContent: "flex-start",
    width: "100%",
    // marginBottom: '-5%',
    position: 'absolute',
    top: 0,
  },
  button: {
    width: "70%",
    borderRadius: 18,
    height: 40,
    alignItems: "center",
    alignContent: 'center',
    justifyContent: "center",
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    display: 'flex',
    marginTop: 3,
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
  row: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
  },
  label: {
    fontSize: "15px",
    fontWeight: "bold",
    color: '#d8d8d8',
    fontFamily: 'cairo',
    // marginRight: 10,
  },
  textFieldBox: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 7,
    width: 230,
    height: 30,
    fontFamily: 'cairo',
    marginBottom: 5,
    alignItems: "center",
    textAlign: "left",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  textFieldBox2: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 7,
    width: window.innerWidth * 0.8,//80%
    height: 30,
    fontFamily: 'cairo',
    marginBottom: 5,
    alignItems: "center",
    textAlign: "left",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  textFieldStyle: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'cairo',
    textAlign: "left",
    color: "black",
    fontFamily: 'cairo',
    fontWeight: "700",
    outlineStyle: 'none',
    borderColor: "#fff",
    paddingLeft: 5
  },
  editButton: {
    backgroundColor: '#d0a20e',
    borderRadius: 5,
    marginLeft: 5,
  },
  editImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },

  fieldsContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  photoContainer: {
    alignItems: 'center',
  },
  photo: {
    width: 120,
    height: 120,
    borderColor: "#1c2834",
    borderRadius: "50%",
    marginBottom: 25,
    borderWidth: 3,
  },
  updatePhotoButton: {
    position: 'absolute',
    bottom: 25,
    right: 0,
    backgroundColor: '#1c2834',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  updatePhotoButtonText: {
    color: '#d0a20e',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',  // Add textAlign property
    marginTop: -5,
  },
});

export default ProfileScreen;
