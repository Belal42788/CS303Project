import HomeScreen from "./Screens/HomeScreen.js";
import LoginScreen from "./Screens/LoginScreen.js";
import RegisterScreen from "./Screens/RegisterScreen.js";
import Welcome from "./Screens/welcome.js";
import Forgetpassword from "./Screens/forgetpassword.js";
import ProfileScreen from "./Screens/ProfileScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    //  <Forgetpassword/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
