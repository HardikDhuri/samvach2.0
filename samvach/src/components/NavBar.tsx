// NavBar.tsx
import React from 'react';

interface NavBarProps {
  onLogout: () => void; // Function to handle logout
}

const NavBar: React.FC<NavBarProps> = ({ onLogout }) => {
  return (
    <nav className=" bg-zinc-700 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-xl font-semibold text-green-500 mr-4">Samvach</div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 2 2-7 7-2 2zm14 5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <button className="text-white text-sm font-semibold px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default NavBar;
