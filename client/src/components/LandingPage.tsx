import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Samvach</h1>
      <p className="text-lg mb-8">Connect with friends, family, and colleagues with ease!</p>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <Link
          to={{
            pathname: `/chat/${username}`,
          }}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Join Chat
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
