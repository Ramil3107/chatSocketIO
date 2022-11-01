
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { io } from 'socket.io-client';

const socket = io("http://127.0.0.1:3000")

const App = () => {

  const [chatMessage, setChatMessage] = useState("")
  const [chatMessages, setChatMessages] = useState([])

  const submitChatMessage = () => {
    socket.emit("chat message", chatMessage)
    setChatMessage("")
  }

  useEffect(() => {
    socket.on("chat message", msg => {
      setChatMessages([...chatMessages, msg])
    })
  }, [])

  return (
    <SafeAreaView>
      <TextInput
        value={chatMessage}
        onChangeText={text => setChatMessage(text)}
        onSubmitEditing={() => submitChatMessage()}
        style={styles.textInput}
      />

      {
        chatMessages?.map(message => {
          return (
            <View key={message}>
              <Text>{message}</Text>
            </View>
          )
        })
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 2
  },
});

export default App;
