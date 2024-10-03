import React from "react";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import './App.css';

const projectID = "95537658-d464-4ce4-81d5-48091183c73e"

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
  <div className="App">
   <ChatEngine 
   height = "100vh"
   projectID={projectID}
   userName={localStorage.getItem('username')}
   userSecret={localStorage.getItem('password')}
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
   onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()  }
   />
  </div>
   
  );
}

export default App;
