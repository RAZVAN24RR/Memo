//Classic Imports
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
//Components Imports
import NAV from './Components/Nav/NAV';
import './Components/Nav/NAV.css';

//Import Pages

import Footer from './Components/Footer/FOOTER';
import ROUTES from './routes';
//App
const App = () => {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <NAV
        elements={[
          { key: 0, name: 'Mobile', path: '/' },
          { key: 1, name: 'Community', path: '/' },
          { key: 2, name: 'SignUp', path: '/SignUp' },
          { key: 3, name: 'LogIn', path: '/LogIn' },
        ]}
      />

      <RouterProvider router={router} />
      <Footer />
    </>
  );
};
export default App;
