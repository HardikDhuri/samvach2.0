// HomePage.tsx
import React from 'react';
import UserCard, { User } from './UserCard';

interface HomePageProps {
  users: User[];
}

const HomePage: React.FC<HomePageProps> = ({ users }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-8">All Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
