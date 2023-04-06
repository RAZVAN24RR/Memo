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
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';

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
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
export default App;
