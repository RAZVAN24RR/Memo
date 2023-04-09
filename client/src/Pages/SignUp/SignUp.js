//Classic Imports
import React from 'react';
import { useState, createRef } from 'react';
import axios from 'axios';
//CSS Imports
import './SignUp.css';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

//Components Imports
import NAV from '../../Components/Nav/NAV';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rank, setRank] = useState(null);

  const options = ['Manager', 'Old', 'New'];

  const handleName = (event) => {
    setName(event.target.value);
    
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  }

  const handleDropdown = (option) => {
    setRank(option);
    //console.log(option);
  };

  const handleClick = event => {
    event.preventDefault();
    console.log(email, name, rank, password);
  }

  return (
    <>
      <NAV
        elements={[
          { key: 0, name: 'Back', path: '/' },
          { key: 1, name: 'LogIn', path: '/LogIn' },
        ]}
      />
      <div className="Title">SignUp</div>
      <div className="formSignUp">
        <Form>
          <Form.Group
            onChange={null}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleName}
              type="email"
              placeholder="Name"
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" onChange={handlePassword} />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicCheckbox">
            <Dropdown>
              <Dropdown.Toggle variant="primary">{rank}</Dropdown.Toggle>

              <Dropdown.Menu>
                {options.map((option, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => handleDropdown(option)}
                  >
                    {option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <div className="buttonSubmit">
            <Button variant="primary" type="submit" onClick={handleClick}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default SignUp;
