import { initializeAuth } from "firebase/auth";
import Brandcar from "../assets/Image/Brand.png";
import { collection, addDoc, getFirestore, setDoc, doc, docRef, getDoc,getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Brands = ({  }) => {
  const navigation = useNavigation();
  const [BrandsArray, setBrandsArray] = useState([
    {
      id: 1,
      img: Brandcar,
      name: 'Brand',
    },
    {
      id: 2,
      img: Brandcar,
      name: 'Brand',
    },
    {
      id: 3,
      img: Brandcar,
      name: 'Brand',
    },
    {
      id: 4,
      img: Brandcar,
      name: 'Brand ',
    },
  ]);


  const initialize = async () => {
    const db = getFirestore();
    const colRef = collection(db, "Brands");
    const docsSnap = await getDocs(colRef);
    let arr = [];
    docsSnap.forEach(doc => {
      arr.push(doc.id);
    })

    for (let i = 0; i < arr.length; i++) {
      const db = getFirestore();
      const docRef = doc(db, "Brands", arr[i]);
      const colRef = collection(docRef, "B");
      const DocRef = doc(colRef, "Info");
      const doc1Snap = await getDoc(DocRef);
      arr[i] = ({ id: i, img: doc1Snap._document.data.value.mapValue.fields.uri.stringValue, name: doc1Snap._document.data.value.mapValue.fields.name.stringValue });
    }
    setBrandsArray(arr);
  }

  useEffect(() => {
    // initialize();
  })

  return (
    <View style={styles.marks}>
      <ScrollView horizontal={true} contentContainerStyle={styles.marksscroll} >
        {BrandsArray.map((m) => {
          return (
            <TouchableOpacity key={m.id} onPress={() => navigation.navigate('modelsListScreen')}> 
              <Image source={m.img} style={styles.marksicons}  />
              <Text style={styles.markstext}>{m.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  marksscroll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    gap: 15,
  },

  marks: {
    marginTop: 50,
    marginBottom: 0,
    // marginLeft:"-20%",
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
    marginRight: 8,
    resizeMode: 'contain'
  },
  markstext: {
    color: "#ccc",
    fontFamily: "cairo",
    fontWeight: 800,
    alignSelf: "center",
    marginBottom: 10,
    marginRight: 8,
    fontSize: 15
  }
});

export default Brands;