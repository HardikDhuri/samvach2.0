// App.tsx
import React from 'react';
import HomePage from './components/HomePage';
import './App.css';
import NavBar from './components/NavBar';

const App: React.FC = () => {

  
  // Dummy user data
  const users = [
    {
      id: '1',
      name: 'John Doe',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      online: true
    },
    {
      id: '2',
      name: 'Jane Smith',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      online: false
    },
    {
      id: '3',
      name: 'Michael Johnson',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      online: true
    },
    {
      id: '4',
      name: 'Emily Brown',
      profilePictureUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      online: true
    },
    {
      id: '5',
      name: 'David Wilson',
      profilePictureUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      online: false
    },
  ];

  return (
   <div className="bg-gray-900 min-h-screen">
      <NavBar onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <HomePage users={users} />
    </div>
  );
};

export default App;
