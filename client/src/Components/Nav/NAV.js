//Classic Imports
import React from 'react';

//CSS Imports
import './NAV';

//Bootstrap Imports
import Nav from 'react-bootstrap/Nav';

//Imports Assets
import LOGO from '../../assets/Logo.png';

const NAV = (props) => {
  return (
    <>
      <Nav fluid="md" className="justify-content-center">
        <Nav.Item>
          <img className="image-nav" src={LOGO} alt="LOGO" />
        </Nav.Item>
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
      </Nav>
    </>
  );
};
export default NAV;
