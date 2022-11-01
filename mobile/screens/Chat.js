
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { setChatMessages } from '../redux/chatSlice';

const socket = io("http://127.0.0.1:3000")

export const Chat = () => {

  const chatMessages = useSelector(state => state.chat.chatMessages)
  const dispatch = useDispatch()
  const [chatMessage, setChatMessage] = useState("")
  const [her, setHer] = useState("")

  const submitChatMessage = () => {
    socket.emit("chat message", chatMessage)
    setChatMessage("")
  }

  useEffect(() => {
    socket.on("chat message", (message) => {
      dispatch(setChatMessages(message))
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
}


const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 2
  },
});
