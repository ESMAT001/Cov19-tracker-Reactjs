import React  from 'react';
import Percent from '../Percent.js';
import CountUp from 'react-countup';

const Status = ({ totalConfirmed = false, data, color, preCls = "", children ,delay=1,duration=1}) => {
    const cls = (color) => {
        const darkCls = `dark:bg-${color}-800  dark:bg-opacity-30 capitalize `;

        const lightCls = `text-${color}-600 tex-base sm:text-lg px-2 font-bold w-full text-center py-8 rounded hover:shadow-lg shadow transform hover:scale-105 bg-${color}-200 transition duration-300 ease-in-out`

        return lightCls + " " + darkCls
    }
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
