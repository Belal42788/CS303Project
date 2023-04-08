import { StyleSheet } from "react-native";
var w = window.innerWidth;
var h = window.innerHeight;
const Styles = StyleSheet.create({
    body: {
        backgroundColor: "white",
        width: w + "px",
        height: h - 65 + "px"
    },
    container: {
        marginLeft: ((w / 2) - 123) + "px",
        marginTop: ((h / 2) - 150) + "px",
        width: "250px",
        height:"300px",
        backgroundColor: "gray",
        borderColor: "gray",
        borderWidth: "5px",
        borderRadius: "5px",
        padding: "20px",
    },
    title: {
        fontSize: 30,
        fontFamily: "cursive",
        fontWeight: "bold",
    },titleButon: {
        fontSize: "13px",
        fontWeight: "bold",
    },
    button: {
        width: "120px",
        borderRadius: 25,
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
        marginLeft:"40px",
        backgroundColor: "royalblue",
    }
});

export default Styles;