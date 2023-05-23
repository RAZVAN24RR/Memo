import React, { useEffect, useState } from 'react';
import './ChatTeam.css';
import { useParams } from 'react-router';
import TeamService from '../../services/teams.service';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Circles } from 'react-loader-spinner';
const ChatTeam = () => {
  const { teamId } = useParams();
  const [team, setTeam] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    TeamService.getTeam(teamId).then((_data) => {
      setTeam(_data.data.data.team);
    });
  }, []);
  const handleBack = () => {
    navigate(-1);
  };
  if (team.length === 0) {
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
      <div className="chat_mess_cont">
        <div className="cont_title_chat_team">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 32 32"
            onClick={handleBack}
          >
            <path
              fill="currentColor"
              d="M20.834 8.037L9.64 14.5c-1.43.824-1.43 2.175 0 3l11.194 6.463c1.43.826 2.598.15 2.598-1.5V9.537c0-1.65-1.17-2.326-2.598-1.5z"
            />
          </svg>{' '}
          <h1 className="title_chat_team">{team.ProjectName}</h1>
        </div>

        <div className="cont_chat">
          <div className="mess_chat"></div>
          <div className="inputs_chat">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Write something..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241l5.283-14.605Z"
                    />
                  </g>
                </svg>
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatTeam;
