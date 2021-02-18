import React from 'react'

function Percent({ color, data, total }) {
    return (
        <span className={`text-xs text-gray-100 bg-${color}-600 py-1 px-2 rounded-lg text-center border-0`}>
            {parseFloat((data*100)/total).toFixed(1)}%
        </span>
    )
}

export default Percent
