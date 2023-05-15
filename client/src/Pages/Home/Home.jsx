//Classic Imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//CSS Imports
import './Home.css';
import TeamService from '../../services/teams.service';
import { useNavigate } from 'react-router';
import { Circles } from 'react-loader-spinner';
//Page resolved bug

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [loader, setLoader] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    TeamService.getAllTeams().then((_data) => {
      setTeams(_data);
      setLoader(1);
    });
    // setTeams(Teams);
  }, []);
  const handleClickTeam = (e) => {
    navigate(`/teams/${e._id}`);
    console.log(e._id);
  };
  // console.log(teams);
  if (loader === null) {
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
      <div className="Home">
        <h1>Project Teams</h1>
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
    </>
  );
};
export default Home;
