import React, { Component } from 'react'
import Status from './Status'


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
        console.log(data)
        this.setState({
            data
        })
    }

    render() {

        const { created, totalActiveCases, totalCasesPerMillionPop, totalConfirmed, totalDeaths, totalNewCases, totalNewDeaths, totalRecovered } = this.state.data;

        const cls = "grid grid-cols-3 text-white gap-4";
        const hCls = "dark:text-gray-100 text-gray-800 antialiased text-2xl text-center pb-4";



        const componentsCls=(color)=>(`text-${color}-600 font-bold dark:bg-${color}-800 dark:bg-opacity-30 w-full text-center py-8 rounded hover:bg-opacity-40 hover:shadow-lg hover:bg-${color}-300  transition duration-300 ease-in-out`)



        const preCls=" col-span-full";
        return (
            <article  >
                <h1 className={hCls} >Global Status</h1>
                <div className={cls}>
                    <Status data={totalConfirmed} cls={componentsCls} preCls={preCls} color='blue'>
                        Confirmed
                    </Status>
                    <Status  data={totalDeaths} cls={componentsCls} color='red'>
                        Death
                    </Status>
                    <Status data={totalRecovered} cls={componentsCls} color='green'>
                        Recovered
                    </Status>
                    <Status data={totalActiveCases} cls={componentsCls} color='yellow'>
                        Active
                    </Status>
                </div>
            </article>
        )
    }
}

export default GlobalStatus
