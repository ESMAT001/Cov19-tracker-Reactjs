import React from 'react';
import Percent from '../Percent.js';

function Status({ totalConfirmed = false, data, cls, color, preCls = "", children }) {
    return (
        <div className={cls(color) + preCls}>
            {children} <br/>{data}<br/>{totalConfirmed && <Percent color={color} data={data} total={totalConfirmed} />}
        </div>
    )
}

export default Status
