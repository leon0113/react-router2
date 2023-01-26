import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])
    return (
        <div>
            <h2>This is Friends components from {friends.length}</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;