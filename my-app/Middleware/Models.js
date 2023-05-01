import React, { useEffect, useState } from "react";
import p2 from "../assets/Image/audi_PNG1742.png";
import e63 from "../assets/Image/mercedes E63.png";
import supra from "../assets/Image/Toyota supra.png"
import C190 from "../assets/Image/Mercedes AMG GT S Car - 2128x1160.png"
import corvette from "../assets/Image/Chevrolet Corvette.png"
import e31 from "../assets/Image/BMW E31.png";
import mustang from "../assets/Image/Ford-Mustang-PNG-Photo.png";
import { View, Image, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Models = () => {
    const navigation = useNavigation();
    const [ModelsArray, setModelsArray] = useState([
        {
            id: 1,
            mark: 'Audi',
            img: p2,
            nameCar: "Audi S4 2017",
            seats: 4,
            rent: 50,
        },
        {
            id: 2,
            mark: 'Mercedes-Benz',
            img: e63,
            nameCar: "Mercedes E63 AMG 2010",
            seats: 4,
            rent: 80,
        },
        {
            id: 3,
            mark: 'Toyota',
            img: supra,
            nameCar: "Toyota Supra GTS 2023",
            seats: 4,
            rent: 95,
        },
        {
            id: 4,
            mark: 'Mercedes-Benz',
            img: C190,
            nameCar: "Mercedes AMG GT C190",
            seats: 4,
            rent: 90,
        },
        {
            id: 5,
            mark: 'Chevrolet',
            img: corvette,
            nameCar: "Chevrolet Corvette C6",
            seats: 4,
            rent: 75,
        },
        {
            id: 6,
            mark: 'BMW',
            img: e31,
            nameCar: "BMW E31 850i V12",
            seats: 4,
            rent: 150,
        },
        {
            id: 7,
            mark: 'Ford',
            img: mustang,
            nameCar: "Ford Mustang Coupe 2017",
            seats: 4,
            rent: 115,
        },

    ]);


    const initialize = async () => {

    }

    useEffect(() => {
        initialize();
    })

    return (
        <View style={styles.products}>
            {ModelsArray.map((o) => {
                return (
                    <TouchableOpacity style={styles.card} key={o.id} onPress={() => { navigation.navigate("Car") }}>
                        <Text style={styles.title}>{o.nameCar}</Text>
                        <Image
                            resizeMode="contain"
                            resizeMethod="scale"
                            source={o.img}
                            style={styles.image}
                        />
                        <View style={styles.info}>
                            <Text style={styles.price}>
                                <Image
                                    resizeMode="contain"
                                    resizeMethod="scale"
                                    source={require('../assets/ezgif.com-gif-maker (1).gif')}
                                    style={styles.pay}
                                />
                                {o.rent}$/hour
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    pay: {
        width: '20%',
        height: 'auto'
    },

    marks: {
        marginTop: 30,
        marginBottom: 10,
        display: "flex",
        flexWrap: "wrap",
        width: "auto",
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: "center",
        justifyContent: "space-evenly",

    },
    marksicons: {
        width: 80,
        height: 80,
        borderRadius: "50%",
        marginRight: 12,
    },
    markstext: {
        color: "black",
        fontFamily: "cairo",
        fontWeight: "800",
        alignSelf: "center",
        marginTop: "10%",
        marginBottom: "20%",
        marginRight: 12,
        fontSize: 15
    },
    products: {
        marginTop: "4%",
        marginBottom: "4%",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "auto",
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "lightgray",
        padding: "auto",
        paddingRight: "1%",
        paddingTop: "10%",
        paddingBottom: 70,
        borderRadius: 20,
        borderBottomEndRadius: 0,
        borderBottomLeftRadius: 0,
        gap: 5,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 18,
        shadowColor: "black",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.45,
        shadowRadius: 0.54,
        elevation: 5,
        padding: 5,
        height: "auto",
        width: "auto",
        minWidth: 250,
        minHeight: 300,
        marginLeft: "6%",
        marginBottom: "2%",
        position: 'relative',
    },
    image: {
        position: 'absolute',
        top: 10,
        minWidth: 310,
        minHeight: 300,
        right: -15,
        height: "70%",
        resizeMode: "contain",
        borderBottomEndRadius: 0,
        borderBottomLeftRadius: 0,
    },
    info: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: "120%",
        fontWeight: "700",
        fontFamily: "cairo",
        marginTop: "3%",
        marginBottom: "3%",
        textAlign: "center",
    },
    price: {
        position: 'absolute',
        bottom: -230,
        fontSize: 22,
        fontWeight: "700",
        color: "black",
        fontFamily: "cairo",
        maxWidth: "100%",
        minWidth: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    numofseats: {
        fontSize: "80%",
        fontWeight: "700",
        color: "black",
        fontFamily: "cairo",
        maxWidth: "50%",
        flexWrap: "wrap",
    }
});

// export default ModelsArray;
export default Models;