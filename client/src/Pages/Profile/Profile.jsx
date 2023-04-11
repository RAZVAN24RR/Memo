import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate, useParams } from 'react-router';
import UserService from '../../services/user.service';
import jwt_decode from 'jwt-decode';

function Profile(props) {
  const [jwt] = useLocalStorage('jwt');
  const [data, setData] = useState({});
  const [xp, setXp] = useState(null);
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    if (userId === 'me') {
      navigate(`/profile/${jwt_decode(jwt).userId}`);
      return;
    }
    UserService.profile(userId).then((_data) => {
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
      <h1>{data.name}'s profile</h1>
      <p>
        Xp in company: <b>{xp}</b>
      </p>
    </>
  );
}

export default Profile;
