import LoginScreen from "./Screens/LoginScreen.js";
import RegisterScreen from "./Screens/RegisterScreen.js";
import Home from "./Screens/Homescreen.js";
import Welcome from "./Screens/welcome.js";
import Forgetpassword from "./Screens/Forgetpassword.js";
import ProfileScreen from "./Screens/ProfileScreen.js";
import Getstar1 from "./Screens/GetStar1.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";


const Stack = createNativeStackNavigator();
export default function App() {
    let [fontloadeed] = useFonts ({
      'Roboto' :require('./fonts/assets/fonts/RobotoCondensed-Regular.ttf'),
      'robotobold' :require('./fonts/assets/fonts/RobotoCondensed-Bold.ttf'),
      'mulish' :require('./fonts/assets/fonts/Mulish-VariableFont_wght.ttf'),
    });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Get Start1" component={Getstar1} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
