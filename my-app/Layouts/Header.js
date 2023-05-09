// import auth from "../firebase/config/firebase-config.js";
// import React, { useState } from "react";
// import {
//     StyleSheet,
//     View,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     Alert,
// } from "react-native";


// function Header({ navigation }) {
//     const user = auth.currentUser;

//     return (
//         <View>
//             <View style={styles.header}>
//                 <View style={styles.searchbarview}>
//                     <Image source={require("../assets/Image/Search.png")} style={styles.photoSearch} />
//                     <TextInput
//                         style={styles.searchbartext}
//                         placeholder="Search "
//                         placeholderTextColor="black"
//                         underlineColorAndroid="transparent"

//                     />
//                 </View>
//                 <View style={styles.photoGroub}>
//                     <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//                         <Image source={user.photoURL} style={styles.PhotoStyle} />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     header: {
//         width: "80%",
//         height: "auto",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//         alignContent: "space-between",
//         marginTop: 20,
//         marginBottom: 5,
//         marginLeft: "10%",
//         backgroundColor: "none",

//     },
//     searchbarview: {
//         flexDirection: 'row',
//         backgroundColor: "white",
//         borderColor: "black",
//         borderWidth: 2.5,
//         borderRadius: 70,
//         width: "85%",
//         height: "80%",
//         fontFamily: "cairo",
//         marginTop: -5,
//         marginBottom: "5px",
//         justifyContent: "flex-start",
//         alignItems: "flex-start",
//         textAlign: "left",
//         alignContent: "flex-start",
//         alignSelf: "center",
//     },
//     searchbartext: {
//         fontSize: "80%",
//         width: "80%",
//         height: "85%",
//         textAlign: "left",
//         color: "black",
//         fontFamily: "cairo",
//         fontWeight: "700",
//         marginLeft: -5,
//         marginTop: 4,
//         borderRadius:"25%",
//         borderWidth:1,
//         outlineStyle: 'none',
//         borderColor:"#fff"
//     },
//     photoGroub: {
//         marginTop: -10,
//         marginLeft: 10,
//         marginBottom: 5,
//         width: 54,
//         height: 54,
//         backgroundColor: "black",
//         borderRadius: "50%",
//         bordertWidth: 20,
//     },
//     PhotoStyle: {
//         marginTop: 2,
//         marginLeft: 2,
//         width: 50,
//         height: 50,
//         borderRadius: "50%",
//         borderColor: "black",
//     },
//     photoSearch:{
//         width: 50,
//         height: 50,
//         borderRadius: "50%",
//         borderColor: "black",
//         marginBottom:10
//     }
// });
// export default Header;


////////////////////////////////

// import auth from "../firebase/config/firebase-config.js";
// import React, { useState } from "react";
// import {
//     StyleSheet,
//     View,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     Alert,
// } from "react-native";


// function Header({ navigation }) {
//     const user = auth.currentUser;
//     const [search, setSearch] = useState('');

//     const handleSearch = () => {
//         // handle search functionality here
//         Alert.alert(`Searching for "${search}"`);
//     };

//     return (
//         <View>
//             <View style={styles.header}>
//                 <View style={styles.searchbarview}>
//                     <Image source={require("../assets/Image/Search.png")} style={styles.photoSearch} />
//                     <TextInput
//                         style={styles.searchbartext}
//                         placeholder="Search"
//                         placeholderTextColor="#a9a9a9"
//                         onChangeText={setSearch}
//                         onSubmitEditing={handleSearch}
//                         value={search}
//                     />
//                 </View>
//                 <View style={styles.photoGroub}>
//                     <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//                         <Image source={user.photoURL} style={styles.PhotoStyle} />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     header: {
//         width: "80%",
//         height: "auto",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//         alignContent: "space-between",
//         marginTop: 20,
//         marginBottom: 5,
//         marginLeft: "10%",
//         backgroundColor: "none",
//     },
//     searchbarview: {
//         flexDirection: 'row',
//         backgroundColor: "white",
//         borderColor: "#a9a9a9",
//         borderWidth: 1,
//         borderRadius: 20,
//         width: "70%",
//         height: 40,
//         alignItems: "center",
//         paddingHorizontal: 10,
//     },
//     searchbartext: {
//         fontSize: 16,
//         color: "black",
//         fontFamily: "cairo",
//         fontWeight: "700",
//         marginLeft: 10,
//         flex: 1,
//     },
//     photoGroub: {
//         marginTop: -10,
//         marginLeft: 10,
//         marginBottom: 5,
//         width: 54,
//         height: 54,
//         backgroundColor: "black",
//         borderRadius: "50%",
//         bordertWidth: 20,
//     },
//     PhotoStyle: {
//         marginTop: 2,
//         marginLeft: 2,
//         width: 50,
//         height: 50,
//         borderRadius: "50%",
//         borderColor: "black",
//     },
//     photoSearch:{
//         width: 20,
//         height: 20,
//         tintColor: "#a9a9a9",
//         marginRight: 10,
//     }
// });

// export default Header;

////////////////////////////////////////////////////////////////////////
import auth from "../firebase/config/firebase-config.js";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import p2 from "../assets/Image/audi_PNG1742.png";
import e63 from "../assets/Image/mercedes E63.png";
import supra from "../assets/Image/Toyota supra.png"
import C190 from "../assets/Image/Mercedes AMG GT S Car - 2128x1160.png"
import corvette from "../assets/Image/Chevrolet Corvette.png"
import e31 from "../assets/Image/BMW E31.png";
import mustang from "../assets/Image/Ford-Mustang-PNG-Photo.png";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

function SearchResult({ query }) {
  const [ModelsArray, setModelsArray] = useState([
    {
      id: 1,
      mark: 'Audi',
      img: p2,
      nameCar: "Audi S4 2017",
      review: 5,
      hoursepower: 4600,
      horsepower: 1200,
      topspeed: 200,
      seats: 4,
      fuel: 'Petrol',
      transmission: 'Auto',
      chassis: 4,
      rent: 50,
      color: 'Red',
      CarsPlateNumber: '01-47-87441',
      LicenseNumber: 'SN66-XMZ',
      InsurencePrice: 100,
      Location: 'cairo',
      year: 2019,
      Length: 1800,
      Tankapacity: 42,
      Acceleration: 8.7,
      Speeds: 7,
      AssemblyCountry: 'Germany',
      Torque: 220,

    },
    {
      id: 2,
      mark: 'Mercedes-Benz',
      img: e63,
      nameCar: "Mercedes E63 AMG 2010",
      review: 5.0,
      hoursepower: 4700,
      horsepower: 1200,
      topspeed: 300,
      seats: 4,
      fuel: 'Petrol',
      transmission: 'Auto',
      chassis: 4,
      rent: 70,
      color: 'Black',
      CarsPlateNumber: '22-73-77551',
      LicenseNumber: 'SN67-XMN',
      InsurencePrice: 120,
      Location: 'Giza',
      year: 2019,
      Length: 1800,
      Tankapacity: 42,
      Acceleration: 8.7,
      Speeds: 7,
      AssemblyCountry: 'Germany',
      Torque: 220,
    },
    {
      id: 3,
      mark: 'Toyota',
      img: supra,
      nameCar: "Toyota Supra GTS 2023",
      review: 5.0,
      hoursepower: 4800,
      horsepower: 1200,
      topspeed: 340,
      seats: 2,
      fuel: 'Petrol',
      transmission: 'Auto',
      chassis: 4,
      rent: 90,
      color: 'Red',
      CarsPlateNumber: '28-71-74561',
      LicenseNumber: 'ZN66-XMN',
      InsurencePrice: 150,
      Location: 'Cairo',
      year: 2019,
      Length: 1800,
      Tankapacity: 42,
      Acceleration: 8.7,
      Speeds: 7,
      AssemblyCountry: 'Germany',
      Torque: 220,
    },
    {
      id: 4,
      mark: 'Mercedes-Benz',
      img: C190,
      nameCar: "Mercedes AMG GT C190",
      review: 5.0,
      hoursepower: 4800,
      horsepower: 1200,
      topspeed: 300,
      seats: 2,
      fuel: 'Petrol',
      transmission: 'Auto',
      chassis: 4,
      rent: 90,
      color: 'Red',
      CarsPlateNumber: '01-47-87441',
      LicenseNumber: 'SN66-XMZ',
      InsurencePrice: 100,
      Location: 'cairo',
      year: 2019,
      Length: 1800,
      Tankapacity: 42,
      Acceleration: 8.7,
      Speeds: 7,
      AssemblyCountry: 'Germany',
      Torque: 220,
    },
    {
      id: 5,
      mark: 'BMW',
      img: e31,
      nameCar: "BMW E31 850i V12",
      review: 5.0,
      hoursepower: 4800,
      horsepower: 1200,
      topspeed: 270,
      seats: 2,
      fuel: 'Petrol',
      transmission: 'Auto',
      chassis: 4,
      rent: 75,
      color: 'Red',
      CarsPlateNumber: '01-47-87441',
      LicenseNumber: 'SN66-XMZ',
      InsurencePrice: 100,
      Location: 'cairo',
      year: 2019,
      Length: 1800,
      Tankapacity: 42,
      Acceleration: 8.7,
      Speeds: 7,
      AssemblyCountry: 'Germany',
      Torque: 220,
    },
    {
      id: 6,
      mark: 'Chevrolet',
      img: corvette,
      nameCar: "Chevrolet Corvette C6",
      review: 5.0,
      hoursepower: 4800,
      horsepower: 1200,
      topspeed: 350,
      seats: 2,
      fuel: 'Petrol',
      transmission: 'Auto',
      chassis: 4,
      rent: 150,
      color: 'Yellow',
      CarsPlateNumber: '01-47-87441',
      LicenseNumber: 'SN66-XMZ',
      InsurencePrice: 100,
      Location: 'cairo',
      year: 2019,
      Length: 1800,
      Tankapacity: 42,
      Acceleration: 8.7,
      Speeds: 7,
      AssemblyCountry: 'Germany',
      Torque: 220,
    },

    {
      id: 7,
      mark: 'Ford',
      img: mustang,
      nameCar: "Ford Mustang Coupe 2017",
      review: 5.0,
      hoursepower: 4800,
      horsepower: 1200,
      topspeed: 250,
      seats: 2,
      fuel: 'Petrol',
      transmission: 'Auto',
      chassis: 4,
      rent: 115,
      color: 'Red',
      CarsPlateNumber: '01-47-87441',
      LicenseNumber: 'SN66-XMZ',
      InsurencePrice: 100,
      Location: 'cairo',
      year: 2019,
      Length: 1800,
      Tankapacity: 42,
      Acceleration: 8.7,
      Speeds: 7,
      AssemblyCountry: 'Germany',
      Torque: 220,
    },

  ]);
  const data = [
    { id: 1, name: "Audi S4 2017" },
    { id: 2, name: "Mercedes E63 AMG 2010" },
    { id: 3, name: "Toyota Supra GTS 2023" },
    { id: 4, name: "Mercedes AMG GT C190" },
    { id: 5, name: "BMW E31 850i V12" },
    { id: 6, name: "Chevrolet Corvette C6" },
    { id: 7, name: "Ford Mustang Coupe 2017" },
    // { id: 8 , name:"Volkswagen"},
    // { id: 9 , name:"Tesla"},
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const navigation = useNavigation();


  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() => {navigation.navigate("Car",ModelsArray[item.id-1])
    }}
    >
      <Text style={styles.resultText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={filteredData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.resultList}
    />
  );
}

function Header({ navigation }) {
  const user = auth.currentUser;
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // handle search functionality here
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.searchbarview}>
          <Image
            source={require("../assets/Image/Search.png")}
            style={styles.photoSearch}
          />
          <TextInput
            style={styles.searchbartext}
            placeholder="Search"
            placeholderTextColor="#a9a9a9"
            onChangeText={setSearch}
            onSubmitEditing={handleSearch}
            value={search}
          />
        </View>
        <View style={styles.photoGroub}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image source={user.photoURL} style={styles.PhotoStyle} />
          </TouchableOpacity>
        </View>
      </View>
      {search !== "" && <SearchResult query={search} />}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "80%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "space-between",
    marginTop: 25,
    marginBottom: 0,
    marginLeft: "10%",
    backgroundColor: "none",
  },
  searchbarview: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 30,
    width: "80%",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchbartext: {
    width: "80%",
    fontSize: 16,
    color: "black",
    fontFamily: "cairo",
    fontWeight: "700",
    marginLeft: 0,
    outlineStyle: 'none',
    borderColor: "#fff"

  },
  photoGroub: {
    marginTop: 0,
    marginLeft: 10,
    marginBottom: 0,
    width: 54,
    height: 54,
    backgroundColor: "black",
    borderRadius: "50%",
    bordertWidth: 20,
  },
  PhotoStyle: {
    marginTop: 4,
    marginLeft: 2,
    width: 50,
    height: 50,
    borderRadius: "50%",
    borderColor: "black",
  },
  photoSearch: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    borderColor: "black",
    marginLeft: -6,
  },
  resultList: {
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  resultItem: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  resultText: {
    fontSize: 16,
    color: "black",
    fontFamily: "cairo",
    fontWeight: "700",
  },
  header: {
    width: "80%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "space-between",
    marginTop: 25,
    marginBottom: 0,
    marginLeft: "10%",
    backgroundColor: "none",
  },
  searchbarview: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#d0a20e",
    borderWidth: 3,
    borderColor:"black",
    borderRadius: 30,
    width: "80%",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchbartext: {
    width: "80%",
    fontSize: 16,
    color: "black",
    fontFamily: "cairo",
    fontWeight: "700",
    marginLeft: 0,
    outlineStyle: 'none',

  },
  photoGroub: {
    marginTop: 0,
    marginLeft: 10,
    marginBottom: 0,
    width: 55,
    height: 55,
    borderRadius: "50%",
    bordertWidth: 20,
  },
  PhotoStyle: {
    marginTop: 2,
    marginLeft: 2,
    width: 55,
    height: 55,
    borderRadius: "50%",
    borderColor: "black",
    borderWidth: 1
  },
  photoSearch: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    borderColor: "black",
    marginLeft: -6,
  },
  resultList: {
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  resultItem: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  resultText: {
    fontSize: 16,
    color: "black",
    fontFamily: "cairo",
    fontWeight: "700",
  },
    header: {
        width: "80%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "space-between",
        marginTop: 25,
        marginBottom: 0,
        marginLeft: "10%",
        backgroundColor: "none",
    },
    searchbarview: {
        flexDirection: "row",
        backgroundColor: "white",
        borderColor: "#d0a20e",
        borderWidth: 3,
    borderColor:"black",
        borderRadius: 30,
        width: "80%",
        height: 50,
        alignItems: "center",
        paddingHorizontal: 10,
    },
    searchbartext: {
        width: "80%",
        fontSize: 16,
        color: "black",
        fontFamily: "cairo",
        fontWeight: "700",
        marginLeft: 0,
        outlineStyle: 'none',
    },
    photoGroub: {
        marginTop: 0,
        marginLeft: 10,
        marginBottom: 0,
        width: 55,
        height: 55,
        borderRadius: "50%",
        bordertWidth: 20,
    },
    PhotoStyle: {
        marginTop: 2,
        marginLeft: 2,
        width: 55,
        height: 55,
        borderRadius: "50%",
        borderColor: "black",
        borderWidth: 1
    },
    photoSearch: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        borderColor: "black",
        marginLeft: -6,
    },
    resultList: {
        backgroundColor: "#f5f5f5",
        padding: 10,
    },
    resultItem: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    resultText: {
        fontSize: 16,
        color: "black",
        fontFamily: "cairo",
        fontWeight: "700",
    },
});

export default Header;