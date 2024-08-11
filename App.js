import { StyleSheet, TextInput, View, Text, Alert, Button } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import Start from "./components/Start";
import Chat from "./components/Chat";

const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAAJcZRUbJiTM8V3x3fVp3yl1bD_GGSMMA",
    authDomain: "chat-app-29b02.firebaseapp.com",
    projectId: "chat-app-29b02",
    storageBucket: "chat-app-29b02.appspot.com",
    messagingSenderId: "437117991531",
    appId: "1:437117991531:web:fde7b93d1b2726934a4f2e",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat" component={Chat}>
          {(props) => <chat-app db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
