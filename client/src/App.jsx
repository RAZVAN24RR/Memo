//Classic Imports
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Components Imports
import NAV from './Components/Nav/NAV';

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
