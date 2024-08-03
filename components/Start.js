import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <ImageBackground
      source={require("../img/background-img.png")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text>Chat Now</Text>
        <TextInput
          style={styles.TextInput}
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
        />

        {/*3 color options for background*/}
        <View style={styles.chooseColorBox}>
          <Text style={styles.chooseColorText}>
            Choose Your Background Color
          </Text>
          <View style={styles.colorButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.chooseColor,
                { backgroundColor: "#add99e" },
                background === "#add99e" && styles.selectedColor,
              ]}
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

          {/* Button to start chatting */}
          <Button
            title="Chat Now"
            onPress={signInUser}
            style={styles.buttonStartChatting}
          />
        </View>
        {Platform.OS === "android" ? (
          <KeyboardAvoidingView behavior="height" />
        ) : null}
      </View>
    </ImageBackground>
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
  button: {
    width: "84%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#757083",
    padding: 10,
    marginTop: 5,
    borderRadius: 4,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  chooseColorBox: {
    width: "84%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  colorButtonsContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  chooseColor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    border: 3,
    marginRight: 15,
    borderColor: "white",
  },
  selectedColor: {
    borderColor: "#FCD95B",
    borderWidth: 3,
  },

  chooseColorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});

export default Start;
