import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, id, username } = props.friend;
    // dynamic routing
    const navigate = useNavigate();

    const showFriend = () => {
        //custom path
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h3>Name : {name}</h3>
            <Link to={'/friend/' + id}>Show Detail</Link> <br />
            <button onClick={showFriend}>{username} : {id}</button>
        </div>
    );
};

export default Friend;