import React,{useState} from "react";

import { View,Text,TouchableOpacity,SafeAreaView,Alert,Image } from "react-native-web";

 import  ImagePicker from 'react-native-image-picker';
 //import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const uploadimage =() =>{
    const [Image,setimage] =useState(null);
    const [uploading,setuploading] =useState(false);

    const pickimage =async ()=>{

        let result = await ImagePicker.launchImageLibrary({
            mediaType: ImagePicker.mediaType.All,
            allowEditing:true,
            aspect:[4,3],
            quality:1,

            
        });

        const source ={uri:result.uri};
        console.log(source);
        setimage(source);
        const response = await fetch(Image.uri);
        const blob =await response.blob();
        const filename =Image.uri.substring(image.uri.lastIndexOf('/')+1);
        var ref =firebase.storage().ref().child(filename).put(blob);

        try{
            await ref;
        }catch(e){
            console.log(e);

        }
        setuploading(false);
        Alert.alert(
            'photo uploded !! ....'
        )
        setimage(null);
    
    };

    const uploadphotoc = async ()=>{
        setuploading(true);

    }
    
    return(
        <SafeAreaView>

        <TouchableOpacity onPress={pickimage}>
            <Text> pickimage</Text>
        </TouchableOpacity>

        
       <View>
        {image &&<Image source={{uri: image.uri}} style={{width:300 ,height:300}}/>}
       </View>

       
       <TouchableOpacity onPress={uploadimage}>
            <Text> upload image</Text>
        </TouchableOpacity>


        </SafeAreaView>
    )
}

export default uploadimage