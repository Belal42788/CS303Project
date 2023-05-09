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
import { doc, getDoc, getFirestore, collection, setDoc , getDocs} from "firebase/firestore";
import FontAwesome from "@expo/vector-icons/FontAwesome"

const Models = () => {
    const navigation = useNavigation();
    const [ModelsArray, setModelsArray] = useState([
        {
            id: 1,
            mark: 'Audi',
            img: p2,
            nameCar: "Audi S4 2017",
            review:5,
            hoursepower:4600,
            horsepower:1200,
            topspeed:200,
            seats: 4,
            fuel:'Petrol',
            transmission:'Auto',
            chassis:4,
            rent: 50,
            color : 'Red',
            CarsPlateNumber : '01-47-87441',
            LicenseNumber :'SN66-XMZ',
            InsurencePrice:100,
            Location: 'cairo',
            year:2019,
            Length: 1800 ,
            Tankapacity:42,
            Acceleration:8.7,
            Speeds:7,
            AssemblyCountry:'Germany',
            Torque: 220,
            
        },
        {
            id: 2,
            mark: 'Mercedes-Benz',
            img: e63,
            nameCar: "Mercedes E63 AMG 2010",
            review:5.0,
            hoursepower:4700,
            horsepower:1200,
            topspeed:300,
            seats: 4,
            fuel:'Petrol',
            transmission:'Auto',
            chassis:4,
            rent: 70,
            color : 'Black',
            CarsPlateNumber : '22-73-77551',
            LicenseNumber :'SN67-XMN',
            InsurencePrice:120,
            Location: 'Giza',
            year:2019,
            Length: 1800 ,
            Tankapacity:42,
            Acceleration:8.7,
            Speeds:7,
            AssemblyCountry:'Germany',
            Torque: 220,
        },
        {
            id: 3,
            mark: 'Toyota',
            img: supra,
            nameCar: "Toyota Supra GTS 2023",
            review:5.0,
            hoursepower:4800,
            horsepower:1200,
            topspeed:340,
            seats: 2,
            fuel:'Petrol',
            transmission:'Auto',
            chassis:4,
            rent: 90,
            color : 'Red',
            CarsPlateNumber : '28-71-74561',
            LicenseNumber :'ZN66-XMN',
            InsurencePrice:150,
            Location: 'Cairo',
            year:2019,
            Length: 1800 ,
            Tankapacity:42,
            Acceleration:8.7,
            Speeds:7,
            AssemblyCountry:'Germany',
            Torque: 220,
        },
        {
            id: 4,
            mark: 'Mercedes-Benz',
            img: C190,
            nameCar: "Mercedes AMG GT C190",
            review:5.0,
            hoursepower:4800,
            horsepower:1200,
            topspeed:300,
            seats: 2,
            fuel:'Petrol',
            transmission:'Auto',
            chassis:4,
            rent: 90,
            color : 'Red',
            CarsPlateNumber : '01-47-87441',
            LicenseNumber :'SN66-XMZ',
            InsurencePrice:100,
            Location: 'cairo',
            year:2019,
            Length: 1800 ,
            Tankapacity:42,
            Acceleration:8.7,
            Speeds:7,
            AssemblyCountry:'Germany',
            Torque: 220,
        },
        {
            id: 5,
            mark: 'BMW',
            img: e31,
            nameCar: "BMW E31 850i V12",
            review:5.0,
            hoursepower:4800,
            horsepower:1200,
            topspeed:270,
            seats: 2,
            fuel:'Petrol',
            transmission:'Auto',
            chassis:4,
            rent: 75,
            color : 'Red',
            CarsPlateNumber : '01-47-87441',
            LicenseNumber :'SN66-XMZ',
            InsurencePrice:100,
            Location: 'cairo',
            year:2019,
            Length: 1800 ,
            Tankapacity:42,
            Acceleration:8.7,
            Speeds:7,
            AssemblyCountry:'Germany',
            Torque: 220,
        },
        {
            id: 6,
            mark: 'Chevrolet',
            img: corvette,
            nameCar: "Chevrolet Corvette C6",
            review:5.0,
            hoursepower:4800,
            horsepower:1200,
            topspeed:350,
            seats: 2,
            fuel:'Petrol',
            transmission:'Auto',
            chassis:4,
            rent: 150,
            color : 'Yellow',
            CarsPlateNumber : '01-47-87441',
            LicenseNumber :'SN66-XMZ',
            InsurencePrice:100,
            Location: 'cairo',
            year:2019,
            Length: 1800 ,
            Tankapacity:42,
            Acceleration:8.7,
            Speeds:7,
            AssemblyCountry:'Germany',
            Torque: 220,
        },

        {
            id: 7,
            mark: 'Ford',
            img: mustang,
            nameCar: "Ford Mustang Coupe 2017",
            review:5.0,
            hoursepower:4800,
            horsepower:1200,
            topspeed:250,
            seats: 2,
            fuel:'Petrol',
            transmission:'Auto',
            chassis:4,
            rent: 115,
            color : 'Red',
            CarsPlateNumber : '01-47-87441',
            LicenseNumber :'SN66-XMZ',
            InsurencePrice:100,
            Location: 'cairo',
            year:2019,
            Length: 1800 ,
            Tankapacity:42,
            Acceleration:8.7,
            Speeds:7,
            AssemblyCountry:'Germany',
            Torque: 220,
        },

    ]);
    const [Brand, setBrand] = useState([

    ]);

    const [Model, setModel] = useState([

    ]);


    const updateList = async () => {
        const db = getFirestore();
        const colRef = collection(db, "Brands");
        const docsSnap = await getDocs(colRef);
        let arr=[];
        docsSnap.forEach(doc => {
            arr.push({  value: doc.id });
        })
        setBrand(arr);
    }

    const AddModel = async () => {
        const db = getFirestore();
        Brand.map(async(i)=>{
            const UserRef = doc(db, "Brands", i.value);
            const docSnap = await getDoc(UserRef);
            if(docSnap.data().Car!=null){
                docSnap.data().Car.map((i) => {
                    setModel(Model.push(i));
                });
            }
        })
        setModelsArray(Model);
    }

    const initialize = async () => {
        // await updateList();
        // await AddModel();
    }

    useEffect(() => {
        initialize();
    })

    return (
        <View style={styles.products}>
            {ModelsArray.map((info) => {
                return (
                    <TouchableOpacity style={styles.card} key={info.id} onPress={() => { navigation.navigate("Car",info) }}>
                        <Text style={styles.title}>{info.nameCar}</Text>
                        <Image
                            resizeMode="contain"
                            resizeMethod="scale"
                            source={info.img}
                            style={styles.image}
                        />
                        <View style={styles.info}>
                            <Text style={styles.price}>
                                <Image
                                    resizeMode="contain"
                                    resizeMethod="scale"
                                    source={require('../assets/purse.gif')}
                                    style={styles.pay}
                                />
                                {info.rent}$/hour
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
        minWidth: 280,
        minHeight: 300,
        right: "0%",
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