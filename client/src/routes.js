import PresentationPage from './Pages/PresentationPage/PresentationPage';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import TeamDetails from './Pages/TeamDetails/TeamDetails';
import AddTeam from './Pages/AddTeam/AddTeam';
import Chat from './Pages/Chat/Chat';
import ChatBot from './Pages/ChatBot/ChatBot';
import ChatTeam from './Pages/ChatTeam/ChatTeam';

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
    path: '/teams/:teamId',
    element: <TeamDetails />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/addTeam',
    element: <AddTeam />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/chatBot',
    element: <ChatBot />,
  },
  {
    path: '/chatMess/:teamId',
    element: <ChatTeam />,
  },
];

export default ROUTES;
