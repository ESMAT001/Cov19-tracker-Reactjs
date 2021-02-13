import React from 'react'

function Confirmed({data,preCls,color}) {
    const cls= `text-${color}-600 font-bold bg-${color}-800 bg-opacity-30 w-full text-center py-8 shadow  rounded hover:shadow-lg hover:bg-opacity-40 transition duration-300 ease-in-out`;
    return (
        <div className={cls+" "+preCls}>
         Confirmed <br/>{data}
        </div>
    )
}

export default Confirmed
