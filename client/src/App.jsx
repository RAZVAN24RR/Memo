//Classic Imports
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Components Imports
import NAV from './Components/Nav/NAV';

//Import Pages
import PresentationPage from './Pages/PresentationPage/PresentationPage';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/FOOTER';
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
      element: <Profile />,
    },
    {
      path: '/home',
      element: <Home />,
    },
  ]);
  return (
    <>
      <NAV
        elements={[
          { key: 0, name: 'SignUp', path: '/SignUp' },
          { key: 1, name: 'LogIn', path: '/LogIn' },
        ]}
      />

      <RouterProvider router={router} />
      <Footer />
    </>
  );
};
export default App;
