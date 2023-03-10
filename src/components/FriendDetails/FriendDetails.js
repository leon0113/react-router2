import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
    const { id } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <h2>This is a detail about friend : {id} </h2>
            <h3>Name : {friend.name}</h3>
            <h3 className='email'>Email : {friend.email}</h3>
            <h5>Website : {friend.website}</h5>
            <h6>Phone number : {friend.phone}</h6>
            <p><small>City : {friend.address?.city}</small></p>
        </div>
    );
};

export default FriendDetails;