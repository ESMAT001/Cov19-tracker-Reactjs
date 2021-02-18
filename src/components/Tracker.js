import React, { Component } from 'react';
import GlobalStatus from './global/GlobalStatus';
import CountryStatus from './country/CountryStatus';
class Tracker extends Component {

    render() {
        const cls = "z-40 mx-auto grid lg:grid-cols-2 gap-4";

        return (
            <main className="container xl:px-10 2xl:px-40">
                <div className={cls}>
                    <GlobalStatus />
                    <CountryStatus/>
                </div>
            </main>
        )
    }
}

export default Tracker
