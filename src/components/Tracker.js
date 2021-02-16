import React, { Component } from 'react';
import GlobalStatus from './global/GlobalStatus';
import { DarkModeConsumer } from './darkModeContext';

class Tracker extends Component {

    render() {
        const cls = "z-40 mx-auto grid grid-cols-2";
        const btnCls = ""
        return (
            // < DarkModeConsumer>
            //     {([handleDarkMode, isDark]) => {
            //         return (
                        <main className="container">
                              
                            <div className={cls}>
                                <GlobalStatus />
                            </div>
                        </main>
                    // )
            //     }
            //     }
            // </DarkModeConsumer>

        )
    }
}

export default Tracker
