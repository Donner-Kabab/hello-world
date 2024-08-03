import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = () => {
  const { name } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: background}]}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
