import React  from 'react';
import Percent from '../Percent.js';
import CountUp from 'react-countup';

const Status = ({ totalConfirmed = false, data, cls, color, preCls = "", children }) => {
    return (
        <div className={cls(color) + preCls}>
            {children} <br />
            {data && <CountUp end={data} delay={1} duration={1} />}
            <br />
            {totalConfirmed && <Percent color={color} data={data} total={totalConfirmed} />}
        </div>
    )
}

export default Status
