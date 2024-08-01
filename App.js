import { StyleSheet, TextInput, View, Text, Alert, Button } from "react-native";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  // alert the user input (`text` state's value)
  const alertMyText = () => {
    Alert.alert(text);
  };
  return (
    <View>
      <TextInput
        style={styles.TextInput}
        value={text}
        onChangeText={setText}
        placeholder="Type Something Here"
      />
      <Text>You wrote: {text}</Text>
      <Button
        onPress={() => {
          alertMyText();
        }}
        title="Press Me"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "88%",
    borderWidth: 1,
    height: 50,
    padding: 10,
  },
  textDisplay: {
    height: 50,
    lineHeight: 50,
  },
});

export default App;
