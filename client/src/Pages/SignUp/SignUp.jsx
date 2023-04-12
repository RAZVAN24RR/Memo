//Classic Imports
import React from 'react';
import { useState } from 'react';
import { HttpStatusCode } from 'axios';
//CSS Imports
import './SignUp.css';

//Bootstrap Imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Components Imports
import useLocalStorage from '../../hooks/useLocalStorage';
import { Navigate, useNavigate } from 'react-router';
import UserService from '../../services/user.service';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [jwt] = useLocalStorage('jwt');
  const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    UserService.register(name, email, password).then(
      (res) => {
        if (res.status === HttpStatusCode.Created) {
          navigate('/login');
        } else {
          alert('failed to create user!');
        }
      },
      (err) => {
        alert('failed to create user!!!');
      }
    );
  };

  if (jwt) {
    return <Navigate to="/" />;
  }

  return (
    <>
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
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmail}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={handlePassword}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 "
            controlId="formBasicCheckbox"
          ></Form.Group>
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
