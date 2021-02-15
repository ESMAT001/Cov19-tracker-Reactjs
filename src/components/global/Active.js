import React from 'react'

function Active({data,color}) {
    const cls= `text-${color}-600 font-bold  bg-${color}-800 bg-opacity-30 w-full text-center py-8 shadow  rounded hover:shadow-lg hover:bg-opacity-40 transition duration-300 ease-in-out`;
    return (
        <div className={cls}>
           Active <br/>{data}
        </div>
    )
}

export default Active
