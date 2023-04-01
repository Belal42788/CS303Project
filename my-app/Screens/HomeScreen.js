import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
} from "react-native";

function HomeScreen  ({navigation}) {
    return (
        
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Text style={{ paddingTop: 50 }}> HomeScreen </Text>
        </View>
        <View style={{ marginTop: 40 }}>
            <Button title="Login" onPress={()=>navigation.navigate('Login')} />
        </View>
        <View style={{ marginTop: 40 }}>
            <Button title="Register" onPress={()=>navigation.navigate('Register')} />
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#FF1493",
    },
});

export default HomeScreen





// // import { StatusBar } from "expo-status-bar";
// // import React, { useState } from "react";
// // import {
// //   StyleSheet,
// //   ImageBackground,
// //   Text,
// //   View,
// //   Image,
// //   TextInput,
// //   TouchableOpacity,
// // } from "react-native";

// // export default function App() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   return (
// //     <View style={styles.container}>
// //       <ImageBackground
// //         source={require("./assets/icon.png")}
// //         style={styles.image1}
// //       >
// //         <Text style={styles.loginText}>login / register</Text>
// //       </ImageBackground>

// //       <Image style={styles.image} source={require("./assets/favicon.png")} />
// //       <StatusBar style="auto" />

// //       <View style={styles.inputView}>
// //         <TextInput placeholder="Email" />
// //       </View>

// //       <View style={styles.inputView}>
// //         <TextInput placeholder="Password" secureTextEntry={true} />
// //       </View>

// //       <TouchableOpacity style={styles.loginBtn}>
// //         <Text>LOGIN</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity style={styles.regsBtn}>
// //         <Text>Register</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   image1: {
// //     marginBottom: 40,
// //     width: "80%",
// //     height: 90,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   image: {
// //     marginBottom: 40,
// //   },
// //   inputView: {
// //     backgroundColor: "#416999",
// //     borderRadius: 10,
// //     width: "70%",
// //     height: 45,
// //     marginBottom: 20,
// //     alignItems: "center",
// //   },
// //   regsBtn: {
// //     width: "70%",
// //     borderRadius: 25,
// //     height: 50,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginTop: 10,
// //     backgroundColor: "#4165e1",
// //   },
// //   loginBtn: {
// //     width: "70%",
// //     borderRadius: 25,
// //     height: 50,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginTop: 40,
// //     backgroundColor: "#FFC0CB",
// //   },
// //   logreg: {
// //     fontSize: 30,
// //     height: 50,
// //     marginBottom: 40,
// //     width: 80,
// //     padding: 40,
// //   },
// // });


// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [counter,setCountetr]=useState(0);
//   const ccounterPP =()=>setCountetr(prev => prev+1);
//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={require("./assets/favicon.png")} /> 
//       <StatusBar style="auto" />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email."
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         /> 
//       </View> 
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password."
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         /> 
//       </View> 
//       <TouchableOpacity>
//         <Text style={styles.forgot_button}>Forgot Password?</Text> 
//       </TouchableOpacity> 
//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text> 
//       </TouchableOpacity  > 
//       <View></View>
//       <View>
//         <Text style={{paddingTop :20}}> Number of Count {counter} </Text>
//       </View>
//     </View> 
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     marginBottom: 40,
//   },
//   inputView: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#FF1493",
//   },
// });