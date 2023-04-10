//Classic Imports
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

//Import Pages
import PresentationPage from './Pages/PresentationPage/PresentationPage';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';

//App
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PresentationPage />,
    },
    {
      path: '/LogIn',
      element: <LogIn />,
    },
    {
      path: '/SignUp',
      element: <SignUp />,
    },
    {
        path: '/profile/:userId',
        element: <Profile />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
