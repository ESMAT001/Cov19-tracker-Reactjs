import React, { Component } from 'react';
import GlobalStatus from './global/GlobalStatus';

class Tracker extends Component {

    render() {
        const cls = "z-40 mx-auto grid lg:grid-cols-2";

        return (
            <main className="container xl:px-10 2xl:px-40">
                <div className={cls}>
                    <GlobalStatus />
                </div>
            </main>
        )
    }
}

export default Tracker
