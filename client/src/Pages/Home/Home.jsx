//Classic Imports
import React, { useEffect, useId, useState } from 'react';
import axios from 'axios';
//CSS Imports
import './Home.css';
import TeamService from '../../services/teams.service';
import { useNavigate } from 'react-router';
import { Circles } from 'react-loader-spinner';
import Button from 'react-bootstrap/Button';
import UserService from '../../services/user.service';
import { useLocalStorage } from '../../hooks/useStorage';
import jwtDecode from 'jwt-decode';
import Nav from 'react-bootstrap/Nav';
//Page resolved bug

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [jwt, removeJwt] = useLocalStorage('jwt');
  const [loader, setLoader] = useState(null);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');
  const [xp, setXp] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    TeamService.getAllTeams().then((_data) => {
      setTeams(_data);
      setLoader(1);
    });
    if (jwt)
      UserService.profile(jwtDecode(jwt).userId).then((_data) => {
        if (_data.isManager) {
          setRole('manager');
        } else if (_data.years >= 1) {
          setRole('old');
        } else {
          setRole('new');
        }
        if (_data.months === 0) {
          setXp('< 1 month');
        } else {
          setXp(`${_data.years} years, ${_data.months} months`);
        }
        setUser(_data);
        console.log(_data);
      });
  }, [jwt, useId]);
  const handleClickTeam = (e) => {
    navigate(`/teams/${e._id}`);
    console.log(e._id);
  };
  const handleAddTeam = () => {
    navigate('/addTeam');
  };

  // console.log(teams);
  if ((user === null && teams === null) || teams === null || user === null) {
    return (
      <Circles
        height="800"
        width="80"
        color="#0D6EFD"
        ariaLabel="circles-loading"
        wrapperStyle={{ paddingLeft: '45%' }}
        wrapperClass=""
        visible={true}
      />
    );
  }

  return (
    <>
      <div className="home_container">
        <div className="col-md-4 navs_items">
          <Nav.Link className="nav_active_link">Teams</Nav.Link>
          <Nav.Link href={`http://localhost:3000/chat`}>Chat</Nav.Link>
          <Nav.Link href={`http://localhost:3000/chatBot`}>ChatBot</Nav.Link>
        </div>
        <div className="col-md-8">
          <div className="Home">
            <div className="row">
              <div className="col-md-6">
                <h1 className="Dashboard_name">DASHBOARD</h1>
                <h4 style={{ color: '#0d6efd' }}>
                  {user.isManager ? `${role}` : `${role} - ${xp}`}
                </h4>
                {user.isManager ? (
                  <Button onClick={handleAddTeam} variant="outline-primary">
                    Add team
                  </Button>
                ) : (
                  <Button variant="diabled">Add team</Button>
                )}
              </div>
            </div>
            {teams.map((e) => {
              return (
                <div>
                  <a onClick={() => handleClickTeam(e)}>
                    <p style={{ cursor: 'pointer' }}>{e.ProjectName}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
