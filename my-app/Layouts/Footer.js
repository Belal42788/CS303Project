import React from 'react';
import { View, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';


const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("Main Screen")}>
        <Image source={require("../assets/Image/Home.png")} style={styles.PhotoStyle} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image source={require("../assets/Image/Profile.png")} style={styles.PhotoStyle} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => null}>
        <Image source={require("../assets/Image/shop.png")} style={styles.PhotoStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: '#007aff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  PhotoStyle: {
    width: 50,
    height: 50,
    bordertWidth: "5",
    borderRadius: "50%",
    marginLeft: "50%",
  },
};

export default Footer;