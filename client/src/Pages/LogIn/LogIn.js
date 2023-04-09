//Classic Imports
import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//CSS Imports
import './LogIn';

//Components Imports
import NAV from '../../Components/Nav/NAV';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleClick = event => {
        event.preventDefault();
        console.log(email, password);
    }

  return (
    <>
      <NAV
        elements={[
          { key: 0, name: 'Back', path: '/' },
          { key: 1, name: 'SignUp', path: '/SignUp' },
        ]}
      />
      <div className="Title">LogIn</div>
      <div className="formSignUp">
        <Form>
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
export default LogIn;
