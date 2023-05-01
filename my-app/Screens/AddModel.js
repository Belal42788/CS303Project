import React, { useState, useCallback ,useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import Footer from "../Layouts/Footer.js";
import BackButton from '../Components/backButton.js';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../firebase/config/firebase-config.js";

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker'
import { useForm, Controller } from 'react-hook-form';
import { doc, getDoc, getFirestore, collection, setDoc , getDocs} from "firebase/firestore";

export const AddModel = ({ navigation }) => {
    const [modelName, setModelName] = useState();
    const [price, setprice] = useState();
    const [mount, setmount] = useState();
    const [discription, setdiscription] = useState();
    const [uri, seturi] = useState("https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/uploadcar.png?alt=media&token=d89fbcd8-a45b-4f0e-8f77-8c649a08242a");

    const [modelOpen, setmodelOpen] = useState(false);

    const [modelValue, setmodelValue] = useState(null);

    const [model, setmodel] = useState([
        { label: "Bmw", value: "bmw" },
        { label: "Toyota", value: "toyota" },
        { label: "Tesla", value: "tesla" },
    ]);

    const [BrandOpen, setBrandOpen] = useState(false);
    const [BrandValue, setBrandValue] = useState("");
    const [BrandValueOpetion, setBrandValueOpetion] = useState("");
    const [BrandName, setBrandName] = useState("");
    const [Brand, setBrand] = useState([

    ]);

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
        const filename = modelName;
        const ref = firebase.storage().ref().child("images/" + filename);

        const response = await fetch(uriI);
        const blob = await response.blob();
        const snapshot = await ref.put(blob);
        console.log('Image uploaded successfully');

        const downloadURL = await snapshot.ref.getDownloadURL();

        seturi(downloadURL);
    }
    const updateList = async () => {
        const db = getFirestore();
        const colRef = collection(db, "Brands");
        const docsSnap = await getDocs(colRef);
        let arr=[];
        docsSnap.forEach(doc => {
            arr.push({ label: doc.id, value: doc.id });
        })
        setBrand(arr);
    }
    useEffect(() => {
        updateList();
    })
    const AddModel = async () => {
        if (uri == "https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c") {
            alert("Please choose Image");
        }
        if (modelName != "" && mount != "" && price != "" && discription != "" && modelValue != null) {
            const db = getFirestore();
            const colRefB = collection(db, "Models");
            const docsSnap = await getDocs(colRefB);
            try {
                docsSnap.forEach(doc => {
                    if (doc.id == modelName.toUpperCase()) {
                        throw "exit";
                    }
                })
            } catch (error) {
                alert("This Model is alredy exist.");
                return;
            }
            updatePhoto();
            const docRef = doc(db, "Models", modelName.toUpperCase());
            await setDoc(docRef, {

            });

            const colRef = collection(docRef, "B")
            await setDoc(doc(colRef, "Info"), {
                name: modelName,
                price: price,
                mount: mount,
                discription: discription,
                brand: modelValue,
                uri: uri
            });
            alert("done");
        } else {
            alert("please Enter name of Model");
        }
    };

    const { handleSubmit, control } = useForm();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' ,padding: 30}}>
                <BackButton/>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold',fontSize:20,marginRight:30 }}>
                    Add Model
                </Text>
            </View>
            {/* <View style={styles.select1}>
                <Controller
                    name="model"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownmodel}>
                            <DropDownPicker
                                style={styles.dropdown}
                                open={modelOpen}
                                value={modelValue} //modelValue
                                items={model}
                                setOpen={setmodelOpen}
                                setValue={setmodelValue}
                                setItems={setmodel}
                                placeholder="Select Model"
                                searchable={true}
                                placeholderStyle={styles.placeholderStyles}
                                onChangeValue={() => {
                                    onChange;
                                    console.log(modelValue);
                                }}
                                zIndex={3000}
                                zIndexInverse={1000}
                            />
                        </View>
                    )}
                />
            </View> */}

            <View style={styles.select1}>
                <Controller
                    name="Brand"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownmodel}>
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
                                }}
                                zIndex={3000}
                                zIndexInverse={1000}
                            />
                        </View>
                    )}
                />
            </View>

            <TouchableOpacity onPress={pickImage} style={styles.ImageStyle}>
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
                    placeholder="Model Name"
                    placeholderTextColor="#003f5c"
                    value={modelName}
                    onChangeText={setModelName}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Price"
                    placeholderTextColor="#003f5c"
                    value={price}
                    onChangeText={setprice}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Mount"
                    placeholderTextColor="#003f5c"
                    value={mount}
                    onChangeText={setmount}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Discription"
                    placeholderTextColor="#003f5c"
                    value={discription}
                    onChangeText={setdiscription}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.buttonText} onPress={AddModel}>
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
