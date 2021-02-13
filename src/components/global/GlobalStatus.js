import React, { Component } from 'react'
import Confirmed from './Confirmed'
import Death from './Death';
import Active from './Active';
import Recovered from './Recovered';

 class GlobalStatus extends Component {
    render() {
        const cls="";
        const hCls="text-gray-100 text-2xl ";
        return (
            <article className={cls} >
                <h1 className={hCls} >Global Status</h1>
                <Confirmed/>
                <Death/>
                <Recovered/>
                <Active/>
            </article>
        )
    }
}

export default GlobalStatus
