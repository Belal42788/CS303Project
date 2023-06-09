import React, { useState, useEffect, useCallback } from "react";
import BackButton from "../Components/BackButton.js";
import { LinearGradient } from "expo-linear-gradient";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert, ImageBackground, FlatList
} from "react-native";
import Constants from 'expo-constants';
import Footer from "../Layouts/Footer.js";
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../firebase/config/firebase-config.js";

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker'
import { useForm, Controller } from 'react-hook-form';
import { doc, getDoc, getFirestore, collection, setDoc, getDocs , updateDoc} from "firebase/firestore";
function BlankCar({ navigation, route }) {

    const [Model, setModel] = useState([]);
    const [modelName, setModelName] = useState("");
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
    const [Year, setYear] = useState("");
    const [Tankapacity, setTankapacity] = useState("");
    const [ Acceleration, setAcceleration] = useState("");
    const [Speeds, setSpeeds] = useState("");
    const [Length, setLength] = useState("");
    const [AssemblyCountry, setAssemblyCountry] = useState("");
    const [ Torque, setTorque] = useState("");
    const [uri, seturi] = useState("https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/uploadcar.png?alt=media&token=d89fbcd8-a45b-4f0e-8f77-8c649a08242a");


    const [modelOpen, setmodelOpen] = useState(false);

    const [modelValue, setmodelValue] = useState(null);


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
        return downloadURL;
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
    useEffect(() => {
        updateList();
    })
    const AddModel = async () => {
        if (uri == "https://firebasestorage.googleapis.com/v0/b/twsela-71a88.appspot.com/o/nonuser.png?alt=media&token=96df5919-4ce1-4d6a-8978-f728f03d356c") {
            alert("Please choose Image");
        }
        if (BrandValue != null && modelName != "" && horsePowerCC != "" && location != "" && insurence != "" && licenseNumber != "" && plateNumber != "" && color != "" && chassis != "" && transmission != "" && fuel != "" && seats != "" && topSpeed != "" && hoursepower != "" && price != "") {
            const db = getFirestore();
            const UserRef = doc(db, "Brands", BrandValue.toUpperCase());
            const docSnap = await getDoc(UserRef);
            console.log(docSnap.data());
            // try {
            //     docSnap.data().Car.map((i) => {
            //         if (i.nameCar == route.params.nameCar) {
            //             throw 0;
            //         }
            //     });
            // } catch (error) {
            //     alert("This car add elrady.");
            //     return;
            // }
            docSnap.data().Car.map((i) => {
                setModel(Model.push(i));
                console.log(i);
            });
            const uriL = await updatePhoto();
            setModel(Model.push({
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
                        uri: uriL,
                        Year:Year,
                        Tankapacity:Tankapacity,
                        Acceleration:Acceleration,
                        Speeds:Speeds,
                        Length:Length,
                        AssemblyCountry:AssemblyCountry,
                        Torque:Torque,
                    }));
            console.log(Model);
            await updateDoc(UserRef,{
                Car: Model
            }
            );
            alert("done");
        } else {
            alert("please Add All car info");
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
                                        setBrandName(BrandValue);
                                        console.log(BrandValue);
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
                    placeholder="Engine Capacity"
                    placeholderTextColor="#003f5c"
                    value={hoursepower}
                    onChangeText={setHoursePower}
                />
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/speedometer.gif')} style={styles.anim} />topspeed KM/H</Text> */}
                    <TextInput
                    // style={styles.TextInput}
                    style={styles.specifitext}
                    placeholder="Top Speed"
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
                        <TextInput
                    // style={styles.TextInput}
                    style={styles.specifitext}
                    placeholder="AssemblyCountry"
                    
                    placeholderTextColor="#003f5c"
                    value={AssemblyCountry}
                    onChangeText={setAssemblyCountry}
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
                    <TextInput
                    // style={styles.TextInput}
                    style={styles.specifitext}
                    placeholder="Length"
                    placeholderTextColor="#003f5c"
                    value={Length}
                    onChangeText={setLength}
                />
                    <TextInput
                    // style={styles.TextInput}
                    style={styles.specifitext}
                    placeholder="Tank Capacity"
                    placeholderTextColor="#003f5c"
                    value={Tankapacity}
                    onChangeText={setTankapacity}
                />
                </View>
                <View style={styles.column}>
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/eco-fuel.gif')} style={styles.anim} />fuel</Text> */}
                    <TextInput
                    // style={styles.TextInput}
                    style={styles.specifitext}
                    placeholder="Accelartion"
                    placeholderTextColor="#003f5c"
                    value={Acceleration}
                    onChangeText={setAcceleration}
                />
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/manual-transmission.png')} style={styles.anim} />transmission</Text> */}
                    <TextInput
                    // style={styles.TextInput}
                    style={styles.specifitext}
                    placeholder="Speeds"
                    placeholderTextColor="#003f5c"
                    value={Speeds}
                    onChangeText={setSpeeds}
                />
                    {/* <Text style={styles.specifitext}><Image resizeMode="contain" resizeMethod="scale" source={require('../assets/chassis.png')} style={styles.anim} />chassis WD</Text> */}
                    <TextInput
                    // style={styles.TextInput}
                    style={styles.specifitext}
                    placeholder="Year"
                    placeholderTextColor="#003f5c"
                    value={Year}
                    onChangeText={setYear}
                />
                    <TextInput
                    // style={styles.TextInput}
                    style={styles.specifitext}
                    placeholder="Torque"
                    placeholderTextColor="#003f5c"
                    value={Torque}
                    onChangeText={setTorque}
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
            <TouchableOpacity style={styles.button} onPress={AddModel}>
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
        zIndex: -1,
    },
    info: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 8,
        paddingLeft: 8,
        paddingRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
        fontFamily: "cairo",
        maxWidth: "38%",
        flexWrap: "wrap",
        lineHeight: 18,
    },
    price: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
        fontFamily: "cairo",
        maxWidth: "15%",
        flexWrap: "wrap",
    },
    rate: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    dropdown: {
        zIndex: 1000,
    },
    
  specifi: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: "4%",
    paddingTop:"4%",
    paddingLeft:"2%",
    paddingRight:"2%",
    paddingBottom:"4%",
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
    width: "95%",
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
   
    specifitext: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: "center",
        justifyContent: "space-evenly",
        color: '#444444',
        fontFamily: 'cairo',
        fontWeight: '700',
        marginBottom: 25,
        marginTop: 10,
        textAlign: "center",
        flexWrap:'wrap',
        width:"120%",
        
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
        zIndex: -1,
        width: "100%",
        height: "100px",
        // backgroundColor:"blue",
        borderRightWidth: "0px",
        // borderColor:"blue",
        // borderRadius: "50%",
        // marginTop: 0,
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
});





export default BlankCar; 