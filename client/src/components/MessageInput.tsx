// MessageInput.tsx
import React, { useState } from 'react';

interface MessageInputProps {
  onSubmit: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      onSubmit(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:bg-gray-700 text-white"
        placeholder="Type your message..."
      />
      <button type="submit" className="ml-4 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-green-600 text-white">Send</button>
    </form>
  );
};

export default MessageInput;
