import React from 'react';
import { Time } from './styled';
import { useCurrentDate } from './useCurrentDate.js'

export const Clock = () => {

    const date = useCurrentDate();

    return (
        <Time>
            Dzisiaj jest
            {" "}
            {date.toLocaleString(date, {
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