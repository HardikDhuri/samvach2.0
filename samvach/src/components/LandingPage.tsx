// LandingPage.jsx
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Samvach</h1>
      <p className="text-lg mb-8">Connect with friends, family, and colleagues with ease!</p>
      <div className="space-x-4">
        <Link to="/signup" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">Sign Up</Link>
        <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
