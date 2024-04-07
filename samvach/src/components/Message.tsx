// Message.tsx
import React from 'react';

interface MessageProps {
  text: string;
  sender: string;
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  return (
    <div className="flex flex-col my-2">
      <div className="text-gray-400">{sender}</div>
      <div className="bg-gray-800 p-2 rounded-lg text-white">{text}</div>
    </div>
  );
};

export default Message;
