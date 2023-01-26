import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, id, username } = props.friend;
    // dynamic routing
    const navigate = useNavigate();

    const showFriend = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h3>Name : {name}</h3>
            <button onClick={showFriend}>{username} : {id}</button>
        </div>
    );
};

export default Friend;