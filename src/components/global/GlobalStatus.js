import React, { Component } from 'react';
import Status from './Status';
import GlobalStatusChart from './GlobalStatusChart';
import loadingSvg from '../../svg/loading.svg';
import VaccineStatus from './VaccineStatus';

class GlobalStatus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: false
        }
    }
    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        let data = await fetch('https://api.coronatracker.com/v3/stats/worldometer/global')
        data = await data.json()
        // console.log(data)
        this.setState({
            data: data
        })
    }

    render() {

        const { created, totalCasesPerMillionPop, totalActiveCases, totalConfirmed, totalDeaths, totalRecovered, totalNewCases, totalNewDeaths } = this.state.data;

        // const componentsCls = (color) => {
        //     const darkCls = `dark:bg-${color}-800  dark:bg-opacity-30 capitalize `;

        //     const lightCls = `text-${color}-600 tex-base sm:text-lg px-2 font-bold w-full text-center py-8 rounded hover:shadow shadow-lg bg-${color}-200 transition duration-300 ease-in-out`

        //     return lightCls + " " + darkCls
        // }



        const preCls = " col-span-full";
        return (
            <article className="lg:row-span-2 flex flex-col justify-start" >
                <h1 className="dark:text-gray-100 text-gray-700 antialiased text-2xl text-center pb-4" >Global <i className="fal fa-globe-europe text-blue-500"></i> Status</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 text-white gap-4 mb-4">
                    <Status data={totalConfirmed} preCls={preCls} color='blue'>
                        Confirmed <i className="far  fa-check text-2xl" ></i>
                    </Status>
                    <Status data={totalDeaths} totalConfirmed={totalConfirmed} color='red'>
                        Death <i className="far fa-skull text-2xl"></i>
                    </Status>
                    <Status data={totalRecovered} totalConfirmed={totalConfirmed} color='green'>
                        Recovered <i className="far fa-heartbeat text-2xl"></i>
                    </Status>
                    <Status data={totalActiveCases} totalConfirmed={totalConfirmed} color='yellow'>
                        Active <i className="far fa-lungs-virus text-2xl"></i>
                    </Status>
                    <Status data={totalCasesPerMillionPop} color='purple'>
                        per milion <i className="fas fa-head-side-cough text-2xl"></i>
                    </Status>
                    <Status data={totalNewCases} color='pink'>
                        new cases <i className="far fa-ambulance text-2xl"></i>
                    </Status>
                    <Status data={totalNewDeaths} color='red'>
                        new Death <i className="far fa-skull-crossbones text-2xl"></i>
                    </Status>
                </div>
                {totalActiveCases && <div className="h-full flex flex-col justify-center">
                    <h1 className="dark:text-gray-100 text-gray-700 antialiased text-lg text-center my-2" >Global <i className="fal fa-globe-europe text-blue-500"></i> Status chart </h1>
                    <GlobalStatusChart
                        totalActiveCases={totalActiveCases}
                        totalConfirmed={totalConfirmed}
                        totalDeaths={totalDeaths}
                        totalRecovered={totalRecovered}
                    />
                     <h1 className="dark:text-gray-100 text-gray-700 antialiased text-lg text-center mt-4 mb-2" >Global Vaccine Status chart</h1>
                    <VaccineStatus/>
                    <p className="text-xs text-center text-gray-700 opacity-80 mt-1">Created at {created}</p>
                </div>
                }
                { !totalActiveCases && < div className="h-full lg:h-2/4 py-20 flex flex-col justify-center text-gray-500 font-semibold text-center" id="chart">
                    <p className="text-xl flex justify-center items-center"> Loading Data<img src={loadingSvg} className="w-1/12" alt='loading icon' /></p>
                </div>
                }
            </article>
        )
    }
}

export default GlobalStatus;
