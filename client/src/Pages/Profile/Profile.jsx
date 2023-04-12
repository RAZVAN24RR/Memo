import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate, useParams } from 'react-router';
import UserService from '../../services/user.service';
import jwt_decode from 'jwt-decode';

//CSS
import './Profile.css';

function Profile(props) {
  const [jwt] = useLocalStorage('jwt');
  const [data, setData] = useState({});
  const [xp, setXp] = useState(null);
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    if (userId === 'me') {
      navigate(`/profile/${jwt_decode(jwt).userId}`);
      return;
    }
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
        alert('error!');
        navigate('/');
      }
    );
  }, [jwt, navigate, userId]);

  return (
    <>
      <div className="Profile" fluid="md">
        <h1>{data.name}'s profile</h1>
        <p>
          Rank: <b>{role}</b>
        </p>
        <p>
          Xp in company: <b>{xp}</b>
        </p>
      </div>
    </>
  );
}

export default Profile;
