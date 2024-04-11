'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { useParams } from 'next/navigation';

const ChatPage: React.FC = () => {
    const { username } = useParams();

    const [messages, setMessages] = useState<{ user: string; message: string }[]>([]);
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        if (!username) return; // Wait until username is available

        const newConnection = new HubConnectionBuilder()
            .withUrl(`https://localhost:7230/chatHub?username=${username}`)
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, [username]);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => console.log('SignalR Connected'))
                .catch(err => console.log('SignalR Connection Error: ', err));

            connection.on('ReceiveMessage', (user: string, message: string) => {
                setMessages(prevMessages => [...prevMessages, { user, message }]);
            });
        }
    }, [connection]);

    const sendMessage = async () => {
        if (!connection) return;

        try {
            await connection.send('SendMessage', username, messageInput);
            setMessageInput('');
        } catch (error) {
            console.error('Error sending message: ', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-gray-900 shadow-md rounded-lg">
            <ul className="divide-y divide-gray-700">
                {messages.map((msg, index) => (
                    <li key={index} className="py-2">
                        <strong className="text-blue-400">{msg.user}:</strong> <span className="text-gray-200">{msg.message}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-4 flex">
                <input type="text" value={messageInput} onChange={e => setMessageInput(e.target.value)} className="flex-1 rounded-md border-gray-600 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 px-4 py-2 bg-gray-800 text-gray-200" />
                <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-gray-200 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Send</button>
            </div>
        </div>
    );
};

export default ChatPage;

