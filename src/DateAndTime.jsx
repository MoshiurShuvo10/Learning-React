import React from 'react';

const today = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

function DateAndTime() {
    return (
        <div>
            <h2> Current Date: {today}</h2 >
            <h2>Current Time: {time}</h2>
        </div>

    )
}
export default DateAndTime;

