import React, { Component } from 'react'
import Confirmed from './Confirmed'
import Death from './Death';
import Active from './Active';
import Recovered from './Recovered';

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
        console.log(this.state)
        const { created, totalActiveCases, totalCasesPerMillionPop, totalConfirmed, totalDeaths, totalNewCases, totalNewDeaths, totalRecovered } = this.state.data
        const cls = "grid grid-cols-3 text-white gap-4";
        const hCls = "text-gray-100 text-2xl ";



        const preCls="col-span-full";
        return (
            <article  >
                <h1 className={hCls} >Global Status</h1>
                <div className={cls}>
                    <Confirmed data={totalConfirmed} preCls={preCls} color='blue' />
                    <Death data={totalDeaths} color='red' />
                    <Recovered data={totalRecovered} color='green' />
                    <Active data={totalRecovered} color='yellow' />
                </div>
            </article>
        )
    }
}

export default GlobalStatus
