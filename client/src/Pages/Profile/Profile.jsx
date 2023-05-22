import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useStorage';
import { Navigate, useNavigate, useParams } from 'react-router';
import UserService from '../../services/user.service';
import jwt_decode from 'jwt-decode';
import { Circles } from 'react-loader-spinner';
import Nav from 'react-bootstrap/Nav';
//ASSETS
import ProfileImg from '../../assets/People2.png';

//CSS
import './Profile.css';
import Button from 'react-bootstrap/esm/Button';
import '../../Components/Nav/NAV.css';
import '../Home/Home.css';

const printHelper = (data) => {
  if (!data) {
    return "NOT SET!(edit your profile's skills)";
  }
  return data;
};

const techStackHelper = (techStack) => {
  return techStack === 'BOTH' ? 'FULLSTACK' : techStack;
};

function Profile(props) {
  const [jwt, , removeJwt] = useLocalStorage('jwt');
  const [data, setData] = useState(null);
  const [xp, setXp] = useState(null);
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const { userId } = useParams();
  const [name, setName] = useState('Raul');
  useEffect(() => {
    if (!jwt) {
      return;
    }

    if (userId === 'me' && jwt) {
      navigate(`/profile/${jwt_decode(jwt).userId}`);
      return;
    }
    if (userId === jwt_decode(jwt).userId) {
      UserService.profile(userId).then(
        (_data) => {
          console.log(_data);
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
          setData(_data);
        },
        (err) => {
          navigate('/home');
        }
      );
    } else {
      UserService.getUserByName(name).then(
        (_data) => {
          console.log(_data);
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
          setData(_data);
        },
        (err) => {
          navigate('/home');
        }
      );
    }
  }, [jwt, navigate, userId]);

  if (!jwt) {
    return <Navigate to={'/'} />;
  }

  const handleDel = (event) => {
    UserService.deleteUser(userId)
      .then((res) => {
        if (userId === jwt_decode(jwt).userId) {
          removeJwt();
          return;
        }
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        alert('error!');
      });
  };
  const handleBack = () => {
    navigate(-1);
  };
  if (data == null) {
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
      <div className="navs_items">
        <Nav.Link className="nav_active_link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path d="M9.186 4.797a2.42 2.42 0 1 0-2.86-2.448h1.178c.929 0 1.682.753 1.682 1.682v.766Zm-4.295 7.738h2.613c.929 0 1.682-.753 1.682-1.682V5.58h2.783a.7.7 0 0 1 .682.716v4.294a4.197 4.197 0 0 1-4.093 4.293c-1.618-.04-3-.99-3.667-2.35Zm10.737-9.372a1.674 1.674 0 1 1-3.349 0a1.674 1.674 0 0 1 3.349 0Zm-2.238 9.488c-.04 0-.08 0-.12-.002a5.19 5.19 0 0 0 .381-2.07V6.306a1.692 1.692 0 0 0-.15-.725h1.792c.39 0 .707.317.707.707v3.765a2.598 2.598 0 0 1-2.598 2.598h-.013Z" />
              <path d="M.682 3.349h6.822c.377 0 .682.305.682.682v6.822a.682.682 0 0 1-.682.682H.682A.682.682 0 0 1 0 10.853V4.03c0-.377.305-.682.682-.682Zm5.206 2.596v-.72h-3.59v.72h1.357V9.66h.87V5.945h1.363Z" />
            </g>
          </svg>
        </Nav.Link>
        <Nav.Link href={`http://localhost:3000/chat`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76s-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459l-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"
            />
          </svg>
        </Nav.Link>
        <Nav.Link href={`http://localhost:3000/chatBot`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              d="M9 2.5V2v.5Zm-3 0V3v-.5Zm6.856 9.422l-.35-.356l-.205.2l.07.277l.485-.12ZM13.5 14.5l-.121.485a.5.5 0 0 0 .606-.606l-.485.12Zm-4-1l-.354-.354l-.624.625l.857.214l.121-.485Zm.025-.025l.353.354a.5.5 0 0 0-.4-.852l.047.498ZM.5 8H0h.5ZM7 0v2.5h1V0H7Zm2 2H6v1h3V2Zm6 6a6 6 0 0 0-6-6v1a5 5 0 0 1 5 5h1Zm-1.794 4.279A5.983 5.983 0 0 0 15 7.999h-1a4.983 4.983 0 0 1-1.495 3.567l.701.713Zm.78 2.1L13.34 11.8l-.97.242l.644 2.578l.97-.242Zm-4.607-.394l4 1l.242-.97l-4-1l-.242.97Zm-.208-.863l-.025.024l.708.707l.024-.024l-.707-.707ZM9 14c.193 0 .384-.01.572-.027l-.094-.996A5.058 5.058 0 0 1 9 13v1Zm-3 0h3v-1H6v1ZM0 8a6 6 0 0 0 6 6v-1a5 5 0 0 1-5-5H0Zm6-6a6 6 0 0 0-6 6h1a5 5 0 0 1 5-5V2Zm1.5 6A1.5 1.5 0 0 1 6 6.5H5A2.5 2.5 0 0 0 7.5 9V8ZM9 6.5A1.5 1.5 0 0 1 7.5 8v1A2.5 2.5 0 0 0 10 6.5H9ZM7.5 5A1.5 1.5 0 0 1 9 6.5h1A2.5 2.5 0 0 0 7.5 4v1Zm0-1A2.5 2.5 0 0 0 5 6.5h1A1.5 1.5 0 0 1 7.5 5V4Zm0 8c1.064 0 2.042-.37 2.813-.987l-.626-.78c-.6.48-1.359.767-2.187.767v1Zm-2.813-.987c.77.617 1.75.987 2.813.987v-1a3.483 3.483 0 0 1-2.187-.767l-.626.78Z"
            />
          </svg>
        </Nav.Link>
      </div>

      <div className="Profile-cont ">
        <div className="Profile " fluid="md">
          <h1 className="Profile-name">{data.name}'s profile</h1>
          <div className="back">
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
            </svg>
          </div>
          <p className="Profile-p">
            <b>Rank:</b> <span className="span-b">{role}</span>
          </p>
          <p className="Profile-p">
            Xp in company: <span className="span-o">{xp}</span>
          </p>
          <p className="Profile-p">
            Tech-stack:{' '}
            <span className="span-o">
              {techStackHelper(printHelper(data.techStack))}
            </span>
          </p>
          <p className="Profile-p">
            Communication-style:{' '}
            <span className="span-o">{printHelper(data.comStyle)}</span>
          </p>
          <p className="Profile-p">
            Frameworks:{' '}
            <span className="span-o">
              {printHelper(data?.frameworks?.join(', '))}
            </span>
          </p>
          <p className="Profile-p">
            Years of experience:{' '}
            <span className="span-o">
              {printHelper(data.yearsOfExperience)}
            </span>
          </p>
          {userId === jwt_decode(jwt).userId ? (
            <div className="Profile-btns">
              <Button
                className="btn-update"
                variant="primary"
                size="lg"
                onClick={() => navigate('/skills')}
              >
                Update Skills
              </Button>
              <Button
                onClick={handleDel}
                className="btn-del"
                variant="danger"
                size="lg"
              >
                Delete
              </Button>
              <div className="Line-Bottom"></div>
            </div>
          ) : (
            console.log("You can't modify the skills")
          )}
        </div>
        <div className="Profile-img col-md-2">
          {/* <img className="profile-img-img" src={ProfileImg} alt="profile-img" /> */}
        </div>
      </div>
    </>
  );
}

export default Profile;
