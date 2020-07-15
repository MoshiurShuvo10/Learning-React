import React from 'react';
import './index.css';
const first_name = 'Moshiur';
const last_name = 'Rahman';
const company = "Dynamic Solution Innovators Limited";

function Introduction() {
    return (
        <div className='introduction'>
            <h1>Welcome</h1>
            <h2>{`Hello, i am ${first_name} ${last_name}.`}</h2>
            <h2>{`I am a software developer. Currently Working at ${company}`}</h2>
        </div>
    );
}
export default Introduction; 
