import LoginScreen from "./Screens/LoginScreen.js";
import RegisterScreen from "./Screens/RegisterScreen.js";
import Home from "./Screens/Homescreen.js";
import Welcome from "./Screens/welcome.js";
import Forgetpassword from "./Screens/Forgetpassword.js";
import ProfileScreen from "./Screens/ProfileScreen.js";
import Getstar1 from "./Screens/GetStar1.js";
import Getstar2 from "./Screens/GetStar2.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Getstat1" component={Getstar1} />
      <Stack.Screen name="Getstat2" component={Getstar2} />
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
