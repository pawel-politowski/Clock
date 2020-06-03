import React, {useState, useEffect} from 'react';

function ClockWithHooks () {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date().toLocaleTimeString())
        }, 1000);
    });

    return (
        <div>
            <h1>
                Clock with Hooks
            </h1>
            <h2>
                It is {date}.
            </h2>
        </div>
    )
}

export default ClockWithHooks;