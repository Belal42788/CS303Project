import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import auth from "../firebase/config/firebase-config.js";
import React, { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import mark1 from "../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import p1 from "../assets/Exclusive Luxury Car  (Instagram Post15edit).jpg";
const BrandsArray = [
    {
        id: 1,
        img:mark1,
        name :'Tesla',
      },  
    {
        id: 2,
        img:mark1,
        name :'Mazda',
      },  
    {
        id: 3,
        img:mark1,
        name :'Ford',
      },  
    {
        id: 4,
        img:mark1,
        name :'Ferrari',
      },  
    {
        id: 5,
        img:mark1,
        name :'Ferrari',
      },  
    {
        id: 6,
        img:mark1,
        name :'Ferrari',
      },  
    {
        id: 7,
        img:mark1,
        name :'Ferrari',
      },  

];
export default BrandsArray;