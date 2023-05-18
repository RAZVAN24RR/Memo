import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './ChatBot.css';
const ChatBot = () => {
  return (
    <>
      <Nav.Link className="nav_active_link">ChatBot</Nav.Link>
      <Nav.Link href={`http://localhost:3000/home`}>Teams</Nav.Link>
      <Nav.Link href={`http://localhost:3000/chat`}>Chat</Nav.Link>
    </>
  );
};
export default ChatBot;
