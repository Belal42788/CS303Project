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
  const data = [
    { id: 1, name: "Audi S4 2017" },
    { id: 2, name: "Mercedes E63 AMG 2010" },
    { id: 3, name: "Toyota Supra GTS 2023" },
    { id: 4, name: "Mercedes AMG GT C190" },
    { id: 5, name: "BMW E31 850i V12" },
    { id: 6 , name: "Chevrolet Corvette C6"},
    { id: 7, name: "Ford Mustang Coupe 2017"},
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
      onPress={() => navigation.navigate("Admin")}
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
    width:"80%",
    fontSize: 16,
    color: "black",
    fontFamily: "cairo",
    fontWeight: "700",
    marginLeft: 0,
    
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
          marginLeft:-6,
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