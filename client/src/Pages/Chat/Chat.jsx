import React from 'react';
import Nav from 'react-bootstrap/Nav';
const Chat = () => {
  return (
    <>
      <Nav.Link className="nav_active_link">Chat</Nav.Link>
      <Nav.Link href={`http://localhost:3000/home`}>Teams</Nav.Link>
      <Nav.Link href={`http://localhost:3000/chatBot`}>ChatBot</Nav.Link>
    </>
  );
};
export default Chat;
