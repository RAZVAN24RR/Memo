//Classic Imports
import React, { useEffect } from 'react';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';
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

  useEffect(() => {
    if (jwt)
      UserService.profile(jwt_decode(jwt).userId).then((_data) => {
        setData(_data);
      });
  }, [jwt]);
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
  } else
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
            <Nav.Link href={`profile/${data._id}`}>Profile</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
};
export default NAV;
