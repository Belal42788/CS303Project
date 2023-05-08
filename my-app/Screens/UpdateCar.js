import React, { useState, useEffect, useCallback } from "react";
import BackButton from "../Components/backButton.js";
import { LinearGradient } from "expo-linear-gradient";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert, ImageBackground, FlatList, ScrollView
} from "react-native";
import Constants from 'expo-constants';
import Footer from "../Layouts/Footer.js";
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../firebase/config/firebase-config.js";
import DropDownPicker from 'react-native-dropdown-picker'
import { useForm, Controller } from 'react-hook-form';
import { doc, getDoc, getFirestore, collection, setDoc, getDocs } from "firebase/firestore";
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
import { updateDoc, addDoc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";


function UpdateCar({ navigation, route }) {

    const [price, setPrice] = useState("");
    const [horsePowerCC, setHorsePowerCC] = useState("");
    const [hoursepower, setHoursePower] = useState("");
    const [topSpeed, setTopSpeed] = useState("");
    const [seats, setSeats] = useState("");
    const [fuel, setFuel] = useState("");
    const [transmission, setTransmission] = useState("");
    const [chassis, setChassis] = useState("");
    const [color, setColor] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [insurence, setInsurence] = useState("");
    const [location, setLocation] = useState("");
    const [uri, seturi] = useState("https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/uploadcar.png?alt=media&token=d89fbcd8-a45b-4f0e-8f77-8c649a08242a");

    const [modelOpen, setModelOpen] = useState(false);
    const [modelValue, setModelValue] = useState("");
    const [modelValueOpetion, setModelalueOpetion] = useState("");
    const [modelName, setModelName] = useState("");
    const [model, setModel] = useState([]);
    
    const [nameOpen, setnameOpen] = useState(false);
    const [nameValue, setnameValue] = useState(null);


    const [BrandOpen, setBrandOpen] = useState(false);
    const [BrandValue, setBrandValue] = useState("");
    const [BrandValueOpetion, setBrandValueOpetion] = useState("");
    const [BrandName, setBrandName] = useState("");
    const [Brand, setBrand] = useState([]);

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
        let arr = [];
        docsSnap.forEach(doc => {
            arr.push({ label: doc.id, value: doc.id });
        })
        setBrand(arr);
    }

    const updateModelList = async () => {
        const db = getFirestore();
        const colRefB = collection(db, "Models");
        const docsSnap = await getDocs(colRefB);
        const docRef = doc(db, "Models", modelName.toUpperCase());
        const colRef = collection(docRef, "B")

        let arr = [];
        docsSnap.forEach(doc => {
            arr.push({ label: doc.id, value: doc.id });
        })
        setModel(arr);
    }
    useEffect(() => {
        updateList();
        updateModelList();
    })
    const UpdateModel = async () => {
        if (uri == "https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c") {
            alert("Please choose Image");
        }
        if (BrandValue != null && modelName != "" && horsePowerCC != "" && location != "" && insurence != "" && licenseNumber != "" && plateNumber != "" && color != "" && chassis != "" && transmission != "" && fuel != "" && seats != "" && topSpeed != "" && hoursepower != "" && price != "") {
            const db = getFirestore();
            const colRefB = collection(db, "Models");
            const docsSnap = await getDocs(colRefB);

            updatePhoto();
            const docRef = doc(db, "Models", modelName.toUpperCase());
            await setDoc(docRef, {

            });

            const colRef = collection(docRef, "B")
            await setDoc(doc(colRef, "Info"), {
                name: modelName,
                price: price,
                horsePowerCC: horsePowerCC,
                hoursepower: hoursepower,
                topSpeed: topSpeed,
                seats: seats,
                fuel: fuel,
                transmission: transmission,
                chassis: chassis,
                color: color,
                plateNumber: plateNumber,
                licenseNumber: licenseNumber,
                insurence: insurence,
                location: location,
                brand: BrandValue,
                uri: uri
            });
            alert("done");
        } else {
            alert("please Add All car info");
            // console.log(location + " " + insurence + " " + licenseNumber + " " + plateNumber + " " + color + " " + chassis + " " + transmission + " " + fuel + " " + seats + " " + topSpeed + " " + hoursepower + " " + price + modelName + " " + modelValue +" ");
        }
    };

    const { handleSubmit, control } = useForm();


    return (
        <LinearGradient style={[styles.container]} colors={["#d0a20e", "#1c2834"]} start={{ x: 0.5, y: 0.5 }} end={{ x: 0.5, y: 1 }} locations={[0, 0.6]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 30 }}>
                <BackButton />
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginRight: 30 }}>
                    Model
                </Text>
            </View>
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
            {/* <Image resizeMode="contain" resizeMethod="scale" source={{ uri: route.params.img }} style={styles.image} /> */}
            <TouchableOpacity onPress={pickImage} >
                <Image
                    // style={styles.PhotoStyle}
                    style={styles.image}
                    source={{
                        uri: uri,
                    }}

                />
            </TouchableOpacity>

            <View style={styles.info}>
                {/* <Text style={styles.name}>namecr</Text> */}
                <TextInput
                    // style={styles.TextInput}
                    style={styles.name}
                    placeholder="Model Name"
                    placeholderTextColor="#003f5c"
                    value={modelName}
                    onChangeText={setModelName}
                />
                {/* <Text style={styles.price}><Text style={{ color: '#c19303', fontWeight: '700', fontSize: 35 }}>rent$</Text><Text style={{ color: '#1c2834', fontFamily: 'cairo', fontWeight: '700' }} >/hour</Text></Text> */}
                <TextInput
                    // style={styles.TextInput}
                    style={styles.price}
                    placeholder="Rent"
                    placeholderTextColor="#003f5c"
                    value={price}
                    onChangeText={setPrice}
                />
            </View>
            <View style={styles.rate}>
                <Text style={{ color: '#1c2834', fontFamily: 'cairo', fontSize: 15, fontWeight: '700' }}> ⭐⭐⭐⭐⭐ review /120 Reviews</Text>
            </View>
            <View style={styles.specifi}>
                <View style={styles.column}>
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/CayuB64xuL.gif')} style={styles.anim} />hoursepower CC</Text> */}
                    <TextInput
                        // style={styles.TextInput}
                        style={styles.specifitext}
                        placeholder="Horse Power CC"
                        placeholderTextColor="#003f5c"
                        value={hoursepower}
                        onChangeText={setHoursePower}
                    />
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/speedometer.gif')} style={styles.anim} />topspeed KM/H</Text> */}
                    <TextInput
                        // style={styles.TextInput}
                        style={styles.specifitext}
                        placeholder="Top Speed KM/H"
                        placeholderTextColor="#003f5c"
                        value={topSpeed}
                        onChangeText={setTopSpeed}
                    />
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/safety-belt.gif')} style={styles.anim} />seats seats</Text> */}
                    <TextInput
                        // style={styles.TextInput}
                        style={styles.specifitext}
                        placeholder="Seats"
                        placeholderTextColor="#003f5c"
                        value={seats}
                        onChangeText={setSeats}
                    />
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/galloping horse gif.gif')} style={styles.anim} />horsepower</Text> */}
                    <TextInput
                        // style={styles.TextInput}
                        style={styles.specifitext}
                        placeholder="Horse Power"
                        placeholderTextColor="#003f5c"
                        value={horsePowerCC}
                        onChangeText={setHorsePowerCC}
                    />
                </View>
                <View style={styles.column}>
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/eco-fuel.gif')} style={styles.anim} />fuel</Text> */}
                    <TextInput
                        // style={styles.TextInput}
                        style={styles.specifitext}
                        placeholder="fuel"
                        placeholderTextColor="#003f5c"
                        value={fuel}
                        onChangeText={setFuel}
                    />
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/manual-transmission.png')} style={styles.anim} />transmission</Text> */}
                    <TextInput
                        // style={styles.TextInput}
                        style={styles.specifitext}
                        placeholder="Transmission"
                        placeholderTextColor="#003f5c"
                        value={transmission}
                        onChangeText={setTransmission}
                    />
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/chassis.png')} style={styles.anim} />chassis WD</Text> */}
                    <TextInput
                        // style={styles.TextInput}
                        style={styles.specifitext}
                        placeholder="chassis"
                        placeholderTextColor="#003f5c"
                        value={chassis}
                        onChangeText={setChassis}
                    />
                </View>
            </View>
            <View style={styles.card}>
                {/* <Text style={styles.title}>Color :</Text><Text style={styles.description}>color</Text> */}
                <TextInput
                    // style={styles.TextInput}
                    style={styles.title}
                    placeholder="Color"
                    placeholderTextColor="#003f5c"
                    value={color}
                    onChangeText={setColor}
                />
                {/* <Text style={styles.title}>Car's Plate Number :</Text><Text style={styles.description}>CarsPlateNumber</Text> */}
                <TextInput
                    // style={styles.TextInput}
                    style={styles.title}
                    placeholder="Plate Number"
                    placeholderTextColor="#003f5c"
                    value={plateNumber}
                    onChangeText={setPlateNumber}
                />
                {/* <Text style={styles.title}>License Number:</Text><Text style={styles.description}>LicenseNumber</Text> */}
                <TextInput
                    // style={styles.TextInput}
                    style={styles.title}
                    placeholder="License Number"
                    placeholderTextColor="#003f5c"
                    value={licenseNumber}
                    onChangeText={setLicenseNumber}
                />
                {/* <Text style={styles.title}>Insurence Price:</Text><Text style={styles.description}>InsurencePrice$</Text> */}
                <TextInput
                    // style={styles.TextInput}
                    style={styles.title}
                    placeholder="Incurence"
                    placeholderTextColor="#003f5c"
                    value={insurence}
                    onChangeText={setInsurence}
                />
                {/* <Text style={styles.title}>Location:</Text><Text style={styles.description}>Location</Text> */}
                <TextInput
                    // style={styles.TextInput}
                    style={styles.title}
                    placeholder="Location"
                    placeholderTextColor="#003f5c"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={UpdateModel}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        minHeight: '100vh',
        maxHeight: 'auto',
    },
    image: {
        height: 200,
    },
    info: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
        fontFamily: "cairo",
        maxWidth: "60%",
        flexWrap: "wrap",
        lineHeight: 18,
    },
    price: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
        fontFamily: "cairo",
        maxWidth: "50%",
        flexWrap: "wrap",
    },
    rate: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    specifi: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: "4%",
        marginBottom: "4%",
        marginLeft: 'auto',
        marginRight: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
        height: 'auto',
        width: "85%",
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
    },
    specifitext: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around",
        alignItems: "center",
        justifyContent: "center",
        color: '#444444',
        fontFamily: 'cairo',
        fontWeight: '700',
        marginBottom: 25,
        marginTop: 10,
        textAlign: "center",
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 10,
    },
    anim: {
        marginRight: 5,
        width: '42%',
        height: 53,
    },
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        width: '60%',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'cairo',
        textAlign: 'left'
    },
    description: {
        textAlign: "right",
        width: '40%',
        fontSize: 16,
        fontFamily: 'cairo',
        fontWeight: '600'
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "60%",
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        display: "flex",
        marginBottom: "10%",
        marginTop: "4%"
    },
    buttonText: {
        color: "#232e3a",
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
});





export default UpdateCar; 