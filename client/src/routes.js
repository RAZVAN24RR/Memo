import PresentationPage from './Pages/PresentationPage/PresentationPage';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';

const ROUTES = [
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
];

export default ROUTES;