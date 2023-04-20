
import auth from "../firebase/config/firebase-config.js";
import React from "react";
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

function Shop({ navigation }) {
    const user = auth.currentUser;
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView  style={{ width:"100%" , height : "100%" }}>
                <View>
                    <Text>
                        No Item !
                    </Text>
                </View>
            </ScrollView>
            <Footer navigation={navigation} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(206, 158, 4)",
    },
});
export default Shop;