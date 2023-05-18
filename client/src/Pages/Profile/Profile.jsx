import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useStorage';
import { Navigate, useNavigate, useParams } from 'react-router';
import UserService from '../../services/user.service';
import jwt_decode from 'jwt-decode';
import { Circles } from 'react-loader-spinner';

//ASSETS
import ProfileImg from '../../assets/People2.png';

//CSS
import './Profile.css';
import Button from 'react-bootstrap/esm/Button';

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
      <div className="Profile-cont ">
        <div className="Profile " fluid="md">
          <h1 className="Profile-name">{data.name}'s profile</h1>
          <p className="Profile-p">
            <b>--Rank:</b> <span className="span-b">{role}</span>
          </p>
          <p className="Profile-p">
            ---Xp in company: <span className="span-o">{xp}</span>
          </p>
          <p className="Profile-p">
            ---Tech-stack:{' '}
            <span className="span-o">
              {techStackHelper(printHelper(data.techStack))}
            </span>
          </p>
          <p className="Profile-p">
            ---Communication-style:{' '}
            <span className="span-o">{printHelper(data.comStyle)}</span>
          </p>
          <p className="Profile-p">
            ---Frameworks:{' '}
            <span className="span-o">
              {printHelper(data?.frameworks?.join(', '))}
            </span>
          </p>
          <p className="Profile-p">
            ---Years of experience:{' '}
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
