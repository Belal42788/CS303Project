import { initializeAuth } from "firebase/auth";
import mark1 from "../assets/Image/Exclusive Luxury Car  (Instagram Post15edit).jpg";
import { collection, addDoc, getFirestore, setDoc, doc, docRef, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";


const Brands = ({ navigation }) => {
  const [BrandsArray, setBrandsArray] = useState([
    {
      id: 1,
      img: mark1,
      name: 'Tesla',
    },
    {
      id: 2,
      img: mark1,
      name: 'Mazda',
    },
  ]);


  const initialize = async () => {
    const db = getFirestore();
    const docRef2 = doc(db, "BrandsList", "List");
    const docSnap = await getDoc(docRef2);
    let arr;
    let arr2 = [];
    let arr3 = [];
    arr = docSnap._document.data.value.mapValue.fields.list.mapValue.fields.BrandName.arrayValue.values;
    for (let index = 0; index < arr.length; index++) {
      arr2.push(arr[index].stringValue);
    }
    for (let i = 0; i < arr2.length; i++) {
      const db = getFirestore();
      const docRef = doc(db, "Brands", arr2[i].toUpperCase());
      const colRef = collection(docRef, "B");
      const DocRef = doc(colRef, "Info");
      const doc1Snap = await getDoc(DocRef);
      // console.log(doc1Snap);
      // console.log("name :"+ doc1Snap._document.data.value.mapValue.fields.name.stringValue );
      arr3.push({ id: i, img: doc1Snap._document.data.value.mapValue.fields.uri.stringValue, name: doc1Snap._document.data.value.mapValue.fields.name.stringValue });
    }
    setBrandsArray(arr3);
  }

  useEffect(() => {
    initialize();
  })

  return (
    <View style={styles.marks}>
      <ScrollView horizontal={true} contentContainerStyle={styles.marksscroll} >
        {BrandsArray.map((m) => {
          return (
            <TouchableOpacity key={m.id}>
              <Image source={m.img} style={styles.marksicons} />
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
    borderRadius: "50%",
    marginRight: 12,
  },
  markstext: {
    color: "black",
    fontFamily: "cairo",
    fontWeight: "800",
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: "20%",
    marginRight: 12,
    fontSize: 15
  }
});

// export default BrandsArray;
export default Brands;