import * as React from 'react';
//import { Text, View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "./RTKMessageSlice";

export default function RTKScreen() {

  const [inputText, setInputText] = React.useState("");

  const messages = useSelector((state) => state.color.value); //reading the state 
  const dispatch = useDispatch();

  var messages1 = [{messageId: 1, messageText: "mt1"}, {messageId: 2, messageText: "inputText"}, ]

  //const onChangeText = () => {

  //    setText(Text);

  //}

  const addMessage = () => {

    console.log("hello");
    dispatch(setMessages({messgeId: 9876543210, messageText: inputText}));

  };

  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <input onChange={(e)=>{setInputText(e.target.value)}}></input>
      <button title={"click"} onClick={() => addMessage()}>Click</button>
      <br/>
      {messages1.map(message => 
        <>Home!{message.messageText}</>
      )}
      <br/>
      {messages.map(message => 
        <>Home!{message.messageText}<br/></>
      )}
      <br/>
      <br/>
      <>{JSON.stringify(messages)}</>
    </div>
  );
}

