import { StyleSheet, TextInput, View, Text, Alert, Button } from "react-native";
import { useState } from "react";
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

// Create the navigator
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
      >
        <Stack.Screen
          name="Screen1"
          component={Screen1}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;