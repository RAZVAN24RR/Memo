//Classic Imports
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//Import Pages
import PresentationPage from './Pages/PresentationPage/PresentationPage';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

//App
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PresentationPage />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
export default App;
