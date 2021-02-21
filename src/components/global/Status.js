import React  from 'react';
import Percent from '../Percent.js';
import CountUp from 'react-countup';

const Status = ({ totalConfirmed = false, data, cls, color, preCls = "", children ,delay=1,duration=1}) => {
    return (
        <div className={cls(color) + preCls}>
            {children} <br />
            {data && <CountUp end={data} delay={delay} duration={duration} />}
            <br />
            {totalConfirmed && <Percent color={color} data={data} total={totalConfirmed} />}
        </div>
    )
}

export default Status
