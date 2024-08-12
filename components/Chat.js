import { useEffect, useState } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {
  getDoc,
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Chat = ({ route, navigation, db }) => {
  const [messages, setMessages] = useState([]);
  const { name, backgroundColor, userID } = route.params;

  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
          left: {
            backgroundColor: "#FFF",
          },
        }}
      />
    );
  };

  useEffect(() => {
    navigation.setOptions({ title: name });

    const q = query(collection(db, "messages"), where("uid", "==", userID));
    const unsubMessages = onSnapshot(q, (documentsSnapshot) => {
      let newMessages = [];
      documentsSnapshot.forEach((doc) => {
        newMessages.push({ id: doc.id, ...doc.data() });
      });
      setMessages(newMessages);
    });

    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
    };
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID,
          name: name,
        }}
      />
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
