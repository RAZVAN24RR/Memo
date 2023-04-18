//Classic Imports
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router';
//CSS Imports
import './Login.css';


//Components Imports
// import NAV from '../../Components/Nav/NAV';
import AuthService from '../../services/auth.service';
import { useLocalStorage } from '../../hooks/useStorage';
import { HttpStatusCode } from "axios";

const LogIn = () => {
  const [jwt, setJwt] = useLocalStorage('jwt');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    AuthService.login(email, password).then(({ _jwt = '', code, error }) => {
      if (code === HttpStatusCode.Unauthorized) {
        const wrong = error.endsWith('EMAIL') ? 'email' : 'password';
        alert(`Wrong ${wrong}!`);
        return;
      } else if (code !== HttpStatusCode.Ok) {
        alert('Smth went wrong!');
        return;
      }
      setJwt(_jwt);
      window.location.reload();
    }, err => {
        console.error(err);
        alert('Server error!!!!');
    });
  };

  if (jwt) {
    return <Navigate to={'/profile/me'}/>;
  }

  return (
    <>
      <div className="login-c">
        <div className="Title">LogIn</div>
        <div className="formSignUp">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleEmail}
              />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={handlePassword}
              />
            </Form.Group>
            <div className="buttonSubmit">
              <Button variant="primary" type="submit" onClick={handleClick}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className="Log-line"></div>
      </div>
    </>
  );//*/
};
export default LogIn;
