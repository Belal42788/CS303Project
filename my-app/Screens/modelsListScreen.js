import React from 'react';
import { View, Image, Text, FlatList, StyleSheet ,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";


const modelsListScreen = () => {
  const brandImage = require('../assets/Image/brands photo/BMW logo.png'); // Replace with the actual path to the brand image
  const navigation = useNavigation();
  const data = [
    { id: '1', carImage: require('../assets/Image/BMW E31.png'), modelName: 'BMW E31 850i V12', price: '$100/day' },
    { id: '2', carImage: require('../assets/Image/BMW E31.png'), modelName: 'BMW E31 850i V12', price: '$120/day' },
    { id: '3', carImage: require('../assets/Image/BMW E31.png'), modelName: 'BMW E31 850i V12', price: '$90/day' },
    // Add more car models here
  ];

  const renderCarModel = ({ item }) => (
    <TouchableOpacity style={styles.carModelContainer} onPress={() => { navigation.navigate('Car',info) }}>
      <Image source={item.carImage} style={styles.carImage} />
      <View style={styles.carDetails}>
        <Text style={styles.modelName}>{item.modelName}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.brandContainer}>
        <Image source={brandImage} style={styles.brandImage} />
        <Text style={styles.brandName}>BMW</Text> 
      </View>
      <FlatList
        data={data}
        renderItem={renderCarModel}
        keyExtractor={(item) =>{item.id}}
        contentContainerStyle={styles.carList}
      />
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  brandContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  brandImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'contain'
  },
  brandName: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
  carList: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  carModelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
  },
  carImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: 'contain'
  },
  carDetails: {
    flex: 1,
  },
  modelName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});


export default modelsListScreen;
