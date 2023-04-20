import auth from "../firebase/config/firebase-config.js";
import React from "react";
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";


function Header({ navigation }) {
    const user = auth.currentUser;
    return (
        <View>
        <View style={styles.header}>
            <View style={styles.searchbarview}>
                <TextInput
                    style={styles.searchbartext}
                    placeholder="  🔎 Search "
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.photoGroub}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image source={user.photoURL} style={styles.PhotoStyle} />
                </TouchableOpacity>
            </View>
        </View>
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
        marginTop: 20,
        marginBottom: 5,
        marginLeft:"10%",
        backgroundColor: "rgb(206, 158, 4)",
    },
    searchbarview: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 70,
        width: "85%",
        height: "80%",
        fontFamily: "cairo",
        marginTop: -5,
        marginBottom: "5px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textAlign: "left",
        alignContent: "flex-start",
        alignSelf: "center",
    },
    searchbartext: {
        fontSize: "80%",
        width: "90%",
        height: "90%",
        textAlign: "left",
        color: "black",
        fontFamily: "cairo",
        fontWeight: "700",
        marginLeft: 12,
        marginTop: 2,
    },
    photoGroub: {
        marginTop: -10,
        marginLeft: 10,
        marginBottom: 5,
        width:54,
        height:54,
        backgroundColor:"black",
        borderRadius: "50%",
        bordertWidth: 20,
    },
    PhotoStyle: {
        marginTop:2,
        marginLeft:2,
        width: 50,
        height: 50,
        borderRadius: "50%",
        borderColor: "black"
    },
});
export default Header;
