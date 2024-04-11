import React, { useEffect, useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { useParams } from "react-router-dom";

interface ChatPageProps {}

const ChatPage: React.FC<ChatPageProps> = () => {
  const { username } = useParams<{ username: string }>();
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);

  return (
    <div className="bg-gray-900 h-screen flex flex-col">
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white text-xl font-semibold">{username}</div>
        <button className="text-white text-sm font-semibold px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-green-600">
          Logout
        </button>
      </nav>
      <div className="flex-grow flex flex-col m-5 justify-center">
        <div className="messages-container">
          {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
        </div>
      </div>
      <MessageInput onSubmit={ () => console.log("Hello Wrld")}/>
    </div>
  );
};

export default ChatPage;
