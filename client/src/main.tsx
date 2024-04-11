import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChatPage from './components/ChatPage.tsx';
import LandingPage from './components/LandingPage.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/app",
    element: <App />,
    loader: () => <h1> Loading..... </h1>,
  },
  {
    path: "/chat/:username",
    element: <ChatPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
