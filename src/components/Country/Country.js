import React from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const { name } = useParams();
    return (
        <div>
            <h2>Country name : {name}</h2>
        </div>
    );
};

export default Country;