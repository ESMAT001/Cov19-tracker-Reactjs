import React from 'react'

function Status({data,cls,color,preCls="",children}) {
    return (
        <div className={cls(color)+preCls}>
        {children} <br/>{data}
        </div>
    )
}

export default Status
