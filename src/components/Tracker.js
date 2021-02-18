import React, { Component } from 'react';
import GlobalStatus from './global/GlobalStatus';

class Tracker extends Component {

    render() {
        const cls = "z-40 mx-auto grid md:grid-cols-2";

        return (
            <main className="container">
                <div className={cls}>
                    <GlobalStatus />
                </div>
            </main>
        )
    }
}

export default Tracker
