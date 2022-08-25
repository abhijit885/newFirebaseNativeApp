// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/
import "react-native-gesture-handler";

// Import React and Component
import React from "react";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import SplashScreen from "./pages/SplashScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD0rxJTIV4RIKfdFJB6G--9md2-SAEDwjs",
  authDomain: "chat-app-d3f09.firebaseapp.com",
  projectId: "chat-app-d3f09",
  storageBucket: "chat-app-d3f09.appspot.com",
  messagingSenderId: "361125159681",
  appId: "1:361125159681:web:9557ff40c4e38e30ba3100",
  measurementId: "G-X1Q63CL2N2"
};
initializeApp(firebaseConfig);


const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

/* Main Navigator */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 2 Seconds */}
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        /> */}
        {/* Auth Navigator which include Login Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home", //Set Header Title
            headerStyle: {
              backgroundColor: "#307ecc", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
