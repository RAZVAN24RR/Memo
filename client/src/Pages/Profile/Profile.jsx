import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate, useParams } from 'react-router';
import UserService from '../../services/user.service';
import jwt_decode from "jwt-decode";
import { convertMillisecondsToYearsAndMonths } from '../../Utils/time.utils';

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
        UserService.profile(userId).then(_data => {
            const date = new Date(_data.createdAt.toString());
            const diff = Date.now() - date.getTime();
            const {months, years} = convertMillisecondsToYearsAndMonths(diff);
            if (months === 0) {
                setXp('< 1 month');
            } else {
                setXp(`${years} years, ${months} months`);
            }
            setData(_data);
        }, err =>{ 
            alert('error!');
            navigate('/');
        })
    }, [jwt, navigate, userId])


    return (
        <>
            <h1>{data.name}'s profile</h1>
            <p>Rank: <b>{data.rank}</b> </p>
            <p>Xp in company: <b>{xp}</b></p>
        </>
    );
}

export default Profile;