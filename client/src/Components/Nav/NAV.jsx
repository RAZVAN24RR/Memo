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
  const [nav, setNav] = useState(0);
  const handleLogOut = () => {
    removeJwt();
  };
  const handleNav = () => {
    if (nav === 0) setNav(1);
    else if (nav === 1) setNav(0);
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
          <div className={nav === 0 ? 'menu_x' : 'menu_x_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 12 12"
            >
              <path
                fill="#0d6efd"
                d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
              />
            </svg>
          </div>
          <div className={nav === 0 ? 'menu_items' : 'menu_items_active'}>
            <div className="alignRight">
              {props.elements.map((element) => {
                return (
                  <Nav.Item
                    style={{ display: 'flex' }}
                    className="elements_nav"
                    key={element.key}
                  >
                    <Nav.Link href={element.path}>{element.name}</Nav.Link>
                  </Nav.Item>
                );
              })}
            </div>
            <div className={nav === 0 ? 'menu_icon' : 'menu_icon_active'}>
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
            <a href="/home">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className={nav === 0 ? 'menu_x' : 'menu_x_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 12 12"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
              />
            </svg>
          </div>
          <div className={nav === 0 ? 'menu_items' : 'menu_items_active'}>
            <div className="alignRight NAME-PROFILE">{data.name}</div>
            <div className="elements_nav">
              <Nav.Item
                style={{ display: 'flex' }}
                className="align-items-center"
              >
                <Nav.Link href={`/profile/${data._id}`}>Profile</Nav.Link>
                <Nav.Item
                  style={{ display: 'flex' }}
                  className="align-items-center"
                  onClick={handleLogOut}
                >
                  <Nav.Link href="/">Logout</Nav.Link>
                </Nav.Item>
              </Nav.Item>
            </div>
          </div>
          <div className={nav === 0 ? 'menu_icon' : 'menu_icon_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
          </div>
        </Nav>
      </>
    );
  else if (window.location.pathname.split('/')[1] === 'skills')
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="/home">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className={nav === 0 ? 'menu_x' : 'menu_x_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 12 12"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
              />
            </svg>
          </div>
          <div className={nav === 0 ? 'menu_items' : 'menu_items_active'}>
            <div className="alignRight NAME-PROFILE">{data.name}</div>
            <div className="elements_nav">
              <Nav.Item
                style={{ display: 'flex' }}
                className="align-items-center"
              >
                <Nav.Link href={`/profile/${data._id}`}>Profile</Nav.Link>
                <Nav.Item
                  style={{ display: 'flex' }}
                  className="align-items-center"
                  onClick={handleLogOut}
                >
                  <Nav.Link href="/">Logout</Nav.Link>
                </Nav.Item>
              </Nav.Item>
            </div>
          </div>
          <div className={nav === 0 ? 'menu_icon' : 'menu_icon_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
          </div>
        </Nav>
      </>
    );
  else if (window.location.pathname.split('/')[1] === 'chat')
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="/home">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className={nav === 0 ? 'menu_x' : 'menu_x_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 12 12"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
              />
            </svg>
          </div>
          <div className={nav === 0 ? 'menu_items' : 'menu_items_active'}>
            <div className="alignRight NAME-PROFILE">{data.name}</div>
            <div className="elements_nav">
              <Nav.Item
                style={{ display: 'flex' }}
                className="align-items-center"
              >
                <Nav.Link href={`/profile/${data._id}`}>Profile</Nav.Link>
                <Nav.Item
                  style={{ display: 'flex' }}
                  className="align-items-center"
                  onClick={handleLogOut}
                >
                  <Nav.Link href="/">Logout</Nav.Link>
                </Nav.Item>
              </Nav.Item>
            </div>
          </div>
          <div className={nav === 0 ? 'menu_icon' : 'menu_icon_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
          </div>
        </Nav>
      </>
    );
  else if (window.location.pathname.split('/')[1] === 'chatBot')
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="/home">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className={nav === 0 ? 'menu_x' : 'menu_x_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 12 12"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
              />
            </svg>
          </div>
          <div className={nav === 0 ? 'menu_items' : 'menu_items_active'}>
            <div className="alignRight NAME-PROFILE">{data.name}</div>
            <div className="elements_nav">
              <Nav.Item
                style={{ display: 'flex' }}
                className="align-items-center"
              >
                <Nav.Link href={`/profile/${data._id}`}>Profile</Nav.Link>
                <Nav.Item
                  style={{ display: 'flex' }}
                  className="align-items-center"
                  onClick={handleLogOut}
                >
                  <Nav.Link href="/">Logout</Nav.Link>
                </Nav.Item>
              </Nav.Item>
            </div>
          </div>
          <div className={nav === 0 ? 'menu_icon' : 'menu_icon_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
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
            <a href="/home">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className={nav === 0 ? 'menu_x' : 'menu_x_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 12 12"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
              />
            </svg>
          </div>
          <div className={nav === 0 ? 'menu_items' : 'menu_items_active'}>
            <div className="alignRight NAME-PROFILE">{data.name}</div>
            <div className="elements_nav">
              <Nav.Item
                style={{ display: 'flex' }}
                className="align-items-center"
              >
                <Nav.Link href={`/home`}>Dashboard</Nav.Link>
                <Nav.Item
                  style={{ display: 'flex' }}
                  className="align-items-center"
                  onClick={handleLogOut}
                >
                  <Nav.Link href="/">Logout</Nav.Link>
                </Nav.Item>
              </Nav.Item>
            </div>
          </div>
          <div className={nav === 0 ? 'menu_icon' : 'menu_icon_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
          </div>
        </Nav>
      </>
    );
  } else if (window.location.pathname.split('/')[1] === 'teams') {
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="/home">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className={nav === 0 ? 'menu_x' : 'menu_x_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 12 12"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
              />
            </svg>
          </div>
          <div className={nav === 0 ? 'menu_items' : 'menu_items_active'}>
            <div className="alignRight NAME-PROFILE">{data.name}</div>
            <div className="elements_nav">
              <Nav.Item
                style={{ display: 'flex' }}
                className="align-items-center"
              >
                <Nav.Link href={`/home`}>Dashboard</Nav.Link>
                <Nav.Item
                  style={{ display: 'flex' }}
                  className="align-items-center"
                  onClick={handleLogOut}
                >
                  <Nav.Link href="/">Logout</Nav.Link>
                </Nav.Item>
              </Nav.Item>
            </div>
          </div>
          <div className={nav === 0 ? 'menu_icon' : 'menu_icon_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              />
            </svg>
          </div>
        </Nav>
      </>
    );
  } else if (window.location.pathname.split('/')[1] === 'addTeam') {
    return (
      <>
        <Nav className="NAV" fluid="md">
          <Nav.Item>
            <a href="/home">
              <img className="image-nav" src={LOGO} alt="LOGO" />
            </a>
          </Nav.Item>
          <div className={nav === 0 ? 'menu_x' : 'menu_x_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 12 12"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
              />
            </svg>
          </div>
          <div className={nav === 0 ? 'menu_items' : 'menu_items_active'}>
            <div className="alignRight NAME-PROFILE">{data.name}</div>
            <div className="elements_nav">
              <Nav.Item
                style={{ display: 'flex' }}
                className="align-items-center"
              >
                <Nav.Link href={`/home`}>Dashboard</Nav.Link>
                <Nav.Item
                  style={{ display: 'flex' }}
                  className="align-items-center"
                  onClick={handleLogOut}
                >
                  <Nav.Link href="/">Logout</Nav.Link>
                </Nav.Item>
              </Nav.Item>
            </div>
          </div>
          <div className={nav === 0 ? 'menu_icon' : 'menu_icon_active'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              onClick={() => handleNav()}
            >
              <path
                fill="#0d6efd"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
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
          <a href="/home">
            <img className="image-nav" src={LOGO} alt="LOGO" />
          </a>
        </Nav.Item>
        <div className={nav === 0 ? 'menu_x' : 'menu_x_active'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 12 12"
          >
            <path
              fill="#0d6efd"
              d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
            />
          </svg>
        </div>
        <div className="alignRight">{data.name}</div>
        <Nav.Item style={{ display: 'flex' }} className="align-items-center">
          <Nav.Link href={`/profile/${data._id}`}>Profile</Nav.Link>
          <Nav.Item
            style={{ display: 'flex' }}
            className="align-items-center"
            onClick={handleLogOut}
          >
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav.Item>
        </Nav.Item>
        <div className={nav === 0 ? 'menu_icon' : 'menu_icon_active'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#0d6efd"
              d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
            />
          </svg>
        </div>
      </Nav>
    </>
  );
};
export default NAV;
