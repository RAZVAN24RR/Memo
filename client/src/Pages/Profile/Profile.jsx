import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate, useParams } from 'react-router';
import UserService from '../../services/user.service';
import jwt_decode from "jwt-decode";

function Profile(props) {
    const [jwt] = useLocalStorage('jwt');
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { userId } = useParams();

    useEffect(() => {
        console.log(userId);
        if (userId === 'me') {
            navigate(`/profile/${jwt_decode(jwt).userId}`);
            return;
        }
        UserService.profile(userId).then(_data => {
            setData(_data);
        }, err =>{ 
            alert('error!');
            navigate('/')
        })
    }, [jwt, navigate, userId])


    return (
        <>
            <h1>{data.name}'s profile</h1>
            <p>Rank: <b>{data.rank}</b> </p>
        </>
    );
}

export default Profile;