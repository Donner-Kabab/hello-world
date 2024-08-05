import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import imageBackground from "../images/background-img.png";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [background, setBackground] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  return (
    <ImageBackground
      source={imageBackground}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text>Chat Now</Text>
        <TextInput
          style={styles.TextInput}
          value={name}
          onChangeText={setName}
          placeholder="Enter Your Name"
        />

        {/*3 color options for background*/}
        <View style={styles.chooseColorBox}>
          <Text style={styles.chooseColorText}>
            Choose Your Background Color
          </Text>
          <View style={styles.colorButtonsContainer}>
            <TouchableOpacity
              style={[styles.chooseColor, { backgroundColor: "#add99e" }]}
              onPress={() => setBackground("#add99e")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.chooseColor, { backgroundColor: "#67c2e0" }]}
              onPress={() => setBackground("#67c2e0")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.chooseColor, { backgroundColor: "#8A95A5" }]}
              onPress={() => setBackground("#8A95A5")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[styles.chooseColor, { backgroundColor: "#b36eeb" }]}
              onPress={() => setBackground("#b36eeb")}
            ></TouchableOpacity>
          </View>

          {/* Button to start chatting */}
          <Button
            title="Start Chatting"
            onPress={() =>
              navigation.navigate("Chat", {
                name: name,
                backgroundColor: backgroundColor,
              })
            }
            style={styles.buttonStartChatting}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "88%",
    height: 50,
    padding: 10,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  textDisplay: {
    height: 50,
    lineHeight: 50,
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
