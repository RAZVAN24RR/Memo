import React, { useEffect, useState } from 'react';
import {useLocalStorage} from '../../hooks/useStorage';
import { Navigate, useNavigate, useParams } from 'react-router';
import UserService from '../../services/user.service';
import jwt_decode from 'jwt-decode';
import { Circles } from  'react-loader-spinner'

//CSS
import './Profile.css';
import Button from 'react-bootstrap/esm/Button';

const printHelper = data => {
    if (!data) {
        return "NOT SET!(edit your profile's skills)";
    }
    return data;
}

const techStackHelper = techStack => {
    return techStack === 'BOTH' ? 'FULLSTACK' : techStack;
}

function Profile(props) {
  const [jwt, , removeJwt] = useLocalStorage('jwt');
  const [data, setData] = useState(null);
  const [xp, setXp] = useState(null);
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    if (!jwt) {
        return;
    }
    if (userId === 'me' && jwt) {
      navigate(`/profile/${jwt_decode(jwt).userId}`);
      return;
    }
    
    UserService.profile(userId).then(
      (_data) => {
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



  if (!jwt) {
    return <Navigate to={'/'}/>;
  }

  const handleDel = event => {
    UserService.deleteUser(userId).then(res => {
        removeJwt();
        window.location.reload()
    }).catch(err => {
        console.error(err);
        alert('error!')
    })
  }

  if (data == null) {
    return <Circles
        height="800"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{'paddingLeft': '45%'}}
        wrapperClass=""
        visible={true}
    />
  }

  return (
    <div>
      <div className="Profile" fluid="md">
        <h1>{data.name}'s profile</h1>
        <p>
          Rank: <b>{role}</b>
        </p>
        <p>
          Xp in company: <b>{xp}</b>
        </p>
        <p>
            Tech-stack: <b>{techStackHelper(printHelper(data.techStack))}</b>
        </p>
        <p>
            Communication-style: <b>{printHelper(data.comStyle)}</b>
        </p>
        <p>
            Frameworks: <b>{printHelper(data?.frameworks?.join(', '))}</b>
        </p>
        <p>
            Years of experience: <b>{printHelper(data.yearsOfExperience)}</b>
        </p>
        <Button variant="primary" size="lg" onClick={() => navigate('/skills')}>
        Update Skills
        </Button>
        <Button onClick={handleDel} variant='danger' size='lg'>
            Delete
        </Button>
      </div>
    </div>
  );
}

export default Profile;
