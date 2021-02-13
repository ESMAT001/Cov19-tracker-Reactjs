import React, { Component } from 'react'
import GlobalStatus from './global/GlobalStatus'
class Tracker extends Component {
    
    render() {
        const cls="container h-96 z-40 mx-auto grid grid-cols-2";
        return (
            <main className={cls}>
               <GlobalStatus/>
            </main>
        )
    }
}

export default Tracker
