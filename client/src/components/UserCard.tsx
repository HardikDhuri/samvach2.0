// UserCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface User {
  id: string;
  name: string;
  profilePictureUrl: string;
  online: boolean; // New property to indicate online status
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {

    const loggedInUser: User = {
        id: "237",
        name: "Hardik Dhuri",
        profilePictureUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        online: false,
      };
      
    const navigate = useNavigate();

    function startChart(): void {
        navigate(`/chat/${user.name}`)  
    }

  return (
    <div className="relative bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center hover:bg-slate-500" onClick={startChart}>
      <div className="relative">
        <img className="w-24 h-24 rounded-full mb-4" src={user.profilePictureUrl} alt={user.name} />
        {user.online && (
          <div className="absolute bottom-5 right-3 -mr-2 -mb-2 w-5 h-5 bg-green-500 rounded-full"></div>
        )}
      </div> 
      <h3 className="text-white text-lg">{user.name}</h3>
    </div>
  );
};

export default UserCard;
