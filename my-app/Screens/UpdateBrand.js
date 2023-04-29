import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import Footer from "../Layouts/Footer.js";
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../firebase/config/firebase-config.js";
// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker'
import { useForm, Controller } from 'react-hook-form';
import { doc, getDoc, getFirestore, collection, setDoc } from "firebase/firestore";
import BackButton from '../Components/backButton.js';



export const UpdateBrand = ({ navigation }) => {
    const [BrandName, setBrandName] = useState("");

    const [uri, seturi] = useState("https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/uploadcar.png?alt=media&token=d89fbcd8-a45b-4f0e-8f77-8c649a08242a");


    const [BrandOpen, setBrandOpen] = useState(false);


    const [BrandValue, setBrandValue] = useState("");
    const [BrandValueOpetion, setBrandValueOpetion] = useState("");


    const [Brand, setBrand] = useState([

    ]);


    useEffect(() => {
        updateList();
    })

    const updateList = async () => {
        const db = getFirestore();
        const docRef2 = doc(db, "BrandsList", "List");
        const docSnap = await getDoc(docRef2);
        let arr;
        let arr2 = [];
        arr = docSnap._document.data.value.mapValue.fields.list.mapValue.fields.BrandName.arrayValue.values;
        // arr.push({
        //     stringValue: BrandName.toUpperCase()
        // });
        for (let index = 0; index < arr.length; index++) {
            arr2.push({ label: arr[index].stringValue, value: arr[index].stringValue });
        }
        setBrand(arr2);
    }

    const selected = async () => {
        if (BrandValue != null) {
            if (BrandName != BrandValue & BrandValue != BrandValueOpetion) {
                const db = getFirestore();
                const docRef = doc(db, "Brands", BrandValue.toUpperCase());
                const colRef = collection(docRef, "B");
                const DocRef = doc(colRef, "Info");
                const docSnap = await getDoc(DocRef);
                seturi(docSnap._document.data.value.mapValue.fields.uri.stringValue);
                setBrandName(docSnap._document.data.value.mapValue.fields.name.stringValue);
            }
        }
    }

    const update = async () => {
        if (BrandValue != null) {
            const db = getFirestore();
            const docRef = doc(db, "Brands", BrandValue.toUpperCase());
            const colRef = collection(docRef, "B");
            const DocRef = doc(colRef, "Info");
            await setDoc(DocRef, {
                name: BrandName,
                uri: uri
            });
            alert("done");
        } else {
            alert('please choose Brand');
        }
    }

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
        if (BrandName == "") {
            alert("please Enter name of Brand");
            return;
        }
        const filename = BrandName;
        const ref = firebase.storage().ref().child("images/" + filename);

        const response = await fetch(uri);
        const blob = await response.blob();
        const snapshot = await ref.put(blob);
        console.log('Image uploaded successfully');

        const downloadURL = await snapshot.ref.getDownloadURL();

        seturi(downloadURL);
    }

    const { handleSubmit, control } = useForm();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 30 }}>
                <BackButton />
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginRight: 30 }}>
                    Update Brand
                </Text>
            </View>
            <View style={styles.select1}>
                <Controller
                    name="Brand"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownBrand}>
                            <DropDownPicker
                                style={styles.dropdown}
                                open={BrandOpen}
                                value={BrandValue} //BrandValue
                                items={Brand}
                                setOpen={setBrandOpen}
                                setValue={setBrandValue}
                                setItems={setBrand}
                                placeholder="Select Brand"
                                searchable={true}
                                placeholderStyle={styles.placeholderStyles}
                                onChangeValue={() => {
                                    onChange;
                                    if (BrandName != BrandValue & BrandValue != BrandValueOpetion) {
                                        selected();
                                    }
                                    setBrandValueOpetion(BrandValue);
                                }}
                                zIndex={3000}
                                zIndexInverse={1000}
                            />
                        </View>
                    )}
                />
            </View>


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
                    placeholder="Brand Name"
                    placeholderTextColor="#003f5c"
                    value={BrandName}
                    onChangeText={setBrandName}
                />
            </View>


            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.buttonText} onPress={update}>
                    Update
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
        marginBottom: 5,
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
