import LoginScreen from "./Screens/LoginScreen.js";
import RegisterScreen from "./Screens/RegisterScreen.js";
import Home from "./Screens/Homescreen.js";
import Forgetpassword from "./Screens/Forgetpassword.js";
import ProfileScreen from "./Screens/ProfileScreen.js";
import { useFonts } from "expo-font";
import Getstar1 from "./Screens/GetStar1.js";
import Getstar2 from './Screens/GetStar2.js';
import Getstar3 from './Screens/GetStar3.js'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  AsyncStorage.getItem("email").then((value) => {
    if (value != null) {
      setEmail(value);
    }
  });
  AsyncStorage.getItem("password").then((value) => {
    if (value != null) {
      setPassword(value);
    }
  });
  let [fontloaded] = useFonts({
    mulish: require("./fonts/assets/fonts/Mulish-VariableFont_wght.ttf"),
    roboto: require("./fonts/assets/fonts/RobotoCondensed-Regular.ttf"),
    prompt: require("./fonts/assets/fonts/Prompt-Bold.ttf"),
    cairo: require("./fonts/assets/fonts/Cairo-VariableFont_slnt,wght.ttf"),
  });
  if (email == null) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

        
          <Stack.Screen name="Get Start1" component={Getstar1} />
          <Stack.Screen name="Get Start2" component={Getstar2} />
          <Stack.Screen name="Get Start3" component={Getstar3} />
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
