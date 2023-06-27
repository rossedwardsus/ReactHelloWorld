import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "./RTKMessageSlice";

export default function MessagingScreen() {

  const messages = useSelector((state) => state.color.value); //reading the state 
  const dispatch = useDispatch();

  var messages1 = [{messageId: 1, messageText: "mt1"}, {messageId: 2, messageText: "mt2"}, ]

  const addMessage = () => {

    console.log("hello");
    dispatch(setMessages({messgeId: 9876543210, messageText: "hello"}));

  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput onChange={()=>{}}></TextInput>
      <Button title={"click"} onPress={() => addMessage()}><Text>Click</Text></Button>
      {messages1.map(message => 
        <Text>Home!{message.messageText}</Text>
      )}
      <Text>{JSON.stringify(messages)}</Text>
    </View>
  );
}

