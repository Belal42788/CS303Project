import React from 'react';
import { View, TouchableOpacity, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.photoGroupH}>
        <TouchableOpacity onPress={() => navigation.navigate("Main Screen")}>
          <FontAwesome name='home'  size={30} color="black" style={styles.PhotoStyle} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <FontAwesome name='user'  size={30} color="black" style={styles.PhotoStyle} />
        </TouchableOpacity>
      </View>
      <View style={styles.photoGroupS}>
        <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
        <FontAwesome  name='cart-plus' size={30} color="black" style={styles.PhotoStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'fixed',
      display:'flex',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    gap:60,
    height: 60,
    backgroundColor: '#ce9e04',
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    opacity:0.96,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  
  
  },
});

export default Footer;