//Classic Imports
import React from 'react';

//CSS Imports
import './NAV.css';

//Bootstrap Imports
import Nav from 'react-bootstrap/Nav';

//Imports Assets
import LOGO from '../../assets/Logo.png';

const NAV = (props) => {
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
};
export default NAV;
