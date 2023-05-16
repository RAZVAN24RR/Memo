import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddTeam.css';
import TeamService from '../../services/teams.service';
import { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router';
const AddTeam = () => {
  const [ProjectName, setProjectName] = useState('');
  const [Description, setDescription] = useState('');
  const [Members, setMembers] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    TeamService.createTeam(ProjectName, Description, Members).then(
      (res) => {
        if (res.status === HttpStatusCode.Created) {
          navigate('/home');
        } else {
          alert('Failed to create user!');
        }
      },
      (err) => {
        alert('failed to create user!!!');
      }
    );
  };
  return (
    <>
      <div className="cont_add_team">
        <div className="Add_title">Add Team</div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>ProjectName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={ProjectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Members</Form.Label>
            <Form.Control
              type="text"
              placeholder="Membrii"
              value={Members}
              onChange={(e) => setMembers(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Trimite
          </Button>
        </Form>
      </div>
    </>
  );
};
export default AddTeam;
