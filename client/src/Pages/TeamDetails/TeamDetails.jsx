import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import TeamService from '../../services/teams.service';
import { Circles } from 'react-loader-spinner';
import './TeamDetails.css';
import UserService from '../../services/user.service';
import { useNavigate } from 'react-router';
import '../../Components/Nav/NAV.css';

const TeamDetails = () => {
  const { teamId } = useParams();
  const [dataTeam, setDataTeam] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log('effect');
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
  const hadleTeamMember = async (name) => {
    console.log(name);
    UserService.getUserByName(name).then((_data) => {
      navigate(`/profile/${_data._id}`);
    });
  };
  // console.log(dataTeam);
  return (
    <>
      <div className="team_cont">
        <div className="team">
          <h3 className="team_title_section">Team</h3>
          {dataTeam.ProjectName}
          <h3 className="team_title_section">Participants</h3>
          {dataTeam.Members.map((e) => {
            return (
              <p onClick={() => hadleTeamMember(e)} className="team_member">
                {e}
              </p>
            );
          })}
          <u>doar pe raul merge sa dai click momentan </u>
          <h3 className="team_title_section">Description</h3>
          {dataTeam.Description}
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
