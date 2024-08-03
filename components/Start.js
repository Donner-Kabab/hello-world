import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Chat App</Text>
      <TextInput
        style={styles.TextInput}
        value={name}
        onChangeText={setName}
        placeholder="Your Name"
      />


    <View style={styles.chooseColorBox}>
      <Text style={styles.chooseColorText}>Choose Background Color</Text>
      <View style={styles.colorButtonsContainer}>
        {/* Render a TouchableOpacity for each color option */}
        <TouchableOpacity
          style={[
            styles.chooseColor,
            { backgroundColor: "#add99e" },
            background === "#add99e" && styles.selectedColor,
          ]}
          // Set the function to handle button press
          onPress={() => setBackground("#add99e")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.chooseColor,
            { backgroundColor: "#67c2e0" },
            background === "#67c2e0" && styles.selectedColor,
          ]}
          onPress={() => setBackground("#67c2e0")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.chooseColor,
            { backgroundColor: "#8A95A5" },
            background === "#8A95A5" && styles.selectedColor,
          ]}
          onPress={() => setBackground("#8A95A5")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.chooseColor,
            { backgroundColor: "#b36eeb" },
            background === "#b36eeb" && styles.selectedColor,
          ]}
          onPress={() => setBackground("#b36eeb")}
        ></TouchableOpacity>
      </View>

      {/* Render a TouchableOpacity for starting the chat */}
      <TouchableOpacity style={styles.button} onPress={signInUser}>
          <Text style={styles.textButton}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}

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
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Start;
