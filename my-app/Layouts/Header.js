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
        <View style={styles.header}>
            <View style={styles.searchbarview}>
                <TextInput
                    style={styles.searchbartext}
                    placeholder="  🔎 Search "
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View  style={styles.photoGroub}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image source={user.photoURL} style={styles.PhotoStyle}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "flex-end",
        // padding: 3,
        backgroundColor: "white",
    },
    header: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "space-between",
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: "#fff",
    },
    searchbarview: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 70,
        width: "85%",
        height: "80%",
        fontFamily: "cairo",
        marginBottom: "5px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textAlign: "left",
        alignContent: "flex-start",
        alignSelf: "center",
        // marginLeft: "-10%",
    },
    searchbartext: {
        fontSize: "80%",
        width: "90%",
        height: "90%",
        textAlign: "left",
        color: "black",
        fontFamily: "cairo",
        fontWeight: "700",
        marginLeft: 9,
    },
    photoGroub:{
        marginTop : -10,
        marginLeft: 10,
    },
    PhotoStyle: {
        width: 50,
        height: 50,
        bordertWidth: "5",
        borderRadius: "50%",
    },
});
export default Header;
