import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import Footer from "../Layouts/Footer.js";

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker'
import { useForm, Controller } from 'react-hook-form';

export const UpdataC = ({ navigation }) => {
    const [nameProduct, setnameProduct] = useState();
    const [price, setprice] = useState();
    const [mount, setmount] = useState();
    const [discription, setdiscription] = useState();
    const [uri, seturi] = useState();


    const [modelOpen, setmodelOpen] = useState(false);
    const [nameOpen, setnameOpen] = useState(false);

    const [modelValue, setmodelValue] = useState(null);
    const [nameValue, setnameValue] = useState(null);

    const [model, setmodel] = useState([
        { label: "Bmw", value: "bmw" },
        { label: "Toyota", value: "toyota" },
        { label: "Tesla", value: "tesla" },
    ]);


    const [name, setname] = useState([
        { label: "Bmw", value: "bmw" },
        { label: "Toyota", value: "toyota" },
        { label: "Tesla", value: "tesla" },
    ]);

    const onmodelOpen = useCallback(() => {
        setnameOpen(false);
    }, []);


    const onnameOpen = useCallback(() => {
        setmodelOpen(false);
    }, []);

    const { handleSubmit, control } = useForm();

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Updata Catigory
            </Text>
            <View style={styles.select1}>
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
                                onOpen={onmodelOpen}
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
            </View>
            <View style={styles.select2}>
                <Controller
                    name="Catigory"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownmodel}>
                            <DropDownPicker
                                style={styles.dropdown}
                                open={nameOpen}
                                value={nameValue} //modelValue
                                items={name}
                                setOpen={setnameOpen}
                                setValue={setnameValue}
                                setItems={setname}
                                placeholder="Select name"
                                placeholderStyle={styles.placeholderStyles}
                                onOpen={onnameOpen}
                                onChangeValue={() => {
                                    onChange;
                                    console.log(nameValue);
                                }}
                                zIndex={3000}
                                zIndexInverse={1000}
                            />
                        </View>
                    )}
                />
            </View>

            <TouchableOpacity onPress={() => { console.log("sdjjaljsdf") }} style={styles.ImageStyle}>
                <Image
                    style={styles.PhotoStyle}
                    source={{
                        uri: require("../assets/Image/1.jpg"),
                    }}
                />
            </TouchableOpacity>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="nameProduct"
                    placeholderTextColor="#003f5c"
                    value={nameProduct}
                    onChangeText={setnameProduct}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="price"
                    placeholderTextColor="#003f5c"
                    value={price}
                    onChangeText={setprice}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="mount"
                    placeholderTextColor="#003f5c"
                    value={mount}
                    onChangeText={setmount}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="discription"
                    placeholderTextColor="#003f5c"
                    value={discription}
                    onChangeText={setdiscription}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.buttonText} onPress={null}>
                    Updata
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
        padding: 8,
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
