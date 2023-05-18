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
import { useLocalStorage } from '../../hooks/useStorage';
import UserService from '../../services/user.service';

const NAV = (props) => {
  const [jwt, removeJwt] = useLocalStorage('jwt');
  const [data, setData] = useState({});

  const handleLogOut = () => {
    removeJwt();
  };

  useEffect(() => {
    if (jwt)
      UserService.profile(jwt_decode(jwt).userId).then((_data) => {
        setData(_data);
      });
    // window.location.reload();
  }, [jwt]);
  console.log(window.location.pathname.split('/')[1]);
  // if (!window.location.pathname.split('/')[1]) {
  //   return null;
  // }
  if (jwt === undefined) {
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="/">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className="menu_items">
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
            <div className="menu_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
                />
              </svg>
            </div>
          </div>
        </Nav>
      </>
    );
  } else if (window.location.pathname.split('/')[1] === 'home')
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="http://localhost:3000/home">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className="menu_items">
            <div className="alignRight NAME-PROFILE">{data.name}</div>
            <Nav.Item
              style={{ display: 'flex' }}
              className="align-items-center"
            >
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
          </div>
          <div className="menu_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
              />
            </svg>
          </div>
        </Nav>
      </>
    );
  else if (window.location.pathname.split('/')[1] === 'profile') {
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="http://localhost:3000/home">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className="menu_items">
            <div className="alignRight NAME-PROFILE">{data.name}</div>
            <Nav.Item
              style={{ display: 'flex' }}
              className="align-items-center"
            >
              <Nav.Link href={`/home`}>DASHBOARD</Nav.Link>
            </Nav.Item>
            <Nav.Item
              style={{ display: 'flex' }}
              className="align-items-center"
              onClick={handleLogOut}
            >
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav.Item>
          </div>
          <div className="menu_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
              />
            </svg>
          </div>
        </Nav>
      </>
    );
  }
  return (
    <>
      <Nav className="NAV" fluid="md">
        <Nav.Item>
          <a href="http://localhost:3000/home">
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
};
export default NAV;
