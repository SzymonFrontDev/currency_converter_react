import React , { useState, useEffect } from 'react';
import { Time } from './styled';

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect (() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); 

    return (
        <Time>
            Dzisiaj jest
            {" "}
            {date.toLocaleString(undefined, {
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long"
            })}
        </Time>
    )
}