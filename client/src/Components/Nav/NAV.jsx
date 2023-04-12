//Classic Imports
import React, { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
// import { useNavigate } from 'react-router';
//CSS Imports
import './NAV.css';

//Bootstrap Imports
import Nav from 'react-bootstrap/Nav';

//Imports Assets
import LOGO from '../../assets/Logo.png';

//Components Imports
import useLocalStorage from '../../hooks/useLocalStorage';
import UserService from '../../services/user.service';

const NAV = (props) => {
  const [jwt] = useLocalStorage('jwt');
  const [data, setData] = useState({});

  const handleLogOut = () => {
    localStorage.clear();
  };

  useEffect(() => {
    if (jwt)
      UserService.profile(jwt_decode(jwt).userId).then((_data) => {
        setData(_data);
      });
    // window.location.reload();
  }, [jwt]);
  console.log(window.location.pathname.split('/')[1]);
  if (jwt === undefined) {
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="/">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className="alignRight">
            {props.elements.map((element) => {
              return (
                <Nav.Item
                  style={{ display: 'flex' }}
                  className="align-items-center"
                  key={element.key}
                >
                  <Nav.Link href={element.path}>{element.name}</Nav.Link>
                </Nav.Item>
              );
            })}
          </div>
        </Nav>
      </>
    );
  } else if (window.location.pathname.split('/')[1] === 'home')
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="/">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className="alignRight">{data.name}</div>
          <Nav.Item style={{ display: 'flex' }} className="align-items-center">
            <Nav.Link href={`http://localhost:3000/profile/${data._id}`}>
              Profile
            </Nav.Link>
            <Nav.Item
              style={{ display: 'flex' }}
              className="align-items-center"
              onClick={handleLogOut}
            >
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav.Item>
          </Nav.Item>
        </Nav>
      </>
    );
  else if (window.location.pathname.split('/')[1] === 'profile') {
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="/">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className="alignRight">{data.name}</div>
          <Nav.Item style={{ display: 'flex' }} className="align-items-center">
            <Nav.Link href={`/home`}>
              Home
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
  }
};
export default NAV;
