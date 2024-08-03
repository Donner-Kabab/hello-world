import { StyleSheet, TextInput, View, Text, Alert, Button } from "react-native";
import { useState } from "react";
import Start from "./components/Start";
import Chat from "./components/Chat";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
