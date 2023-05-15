import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import TeamService from '../../services/teams.service';
import { Circles } from 'react-loader-spinner';
import './TeamDetails.css';

const TeamDetails = () => {
  const { teamId } = useParams();
  const [dataTeam, setDataTeam] = useState(null);
  useEffect(() => {
    console.log('effect');
    TeamService.getTeam(teamId).then((_data) => {
      setDataTeam(_data.data.data.team);
    });
  }, [teamId]);
  if (dataTeam === null) {
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
  console.log(dataTeam);
  return (
    <>
      <h3>Team</h3>
      {dataTeam.ProjectName}
      <h3>Participants</h3>
      {dataTeam.Members.map((e) => {
        return e + '-';
      })}
      <h3>Description</h3>
      {dataTeam.Description}
    </>
  );
};

export default TeamDetails;
