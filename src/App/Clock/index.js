import React , { useState, useEffect } from 'react';
import "./style.css";

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
        <div className="clock">
            Dzisiaj jest
            {" "}
            {date.toLocaleString(undefined, {
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "long",
                month: "long"
            })}
        </div>
    )
}