
import React, { Component } from "react";
import Chart from "react-apexcharts";
import CountrySubInfoBox from './CountrySubInfoBox';
class CountryChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            update: false,
            countryCode: false,
            show: false,
            loading: false,
            chart1: {
                options: {
                    colors: ['#03A9F4'],
                    stroke: {
                        curve: 'smooth',
                        width: 2
                    },
                    markers: {
                        size: 0,
                    },
                    grid: {
                        show: false
                    },
                    chart: {
                        id: "basic-bar",
                        dropShadow: {
                            enabled: true,
                            top: 0,
                            left: 0,
                            blur: 3,
                            opacity: 0.3
                        },
                    },
                    xaxis: {
                        categories: [0]
                    }
                },
                series: [
                    {
                        name: "series-1",
                        data: [0]
                    }
                ]
            },
            chart2: {
                options: {
                    colors: ['#ff4560'],
                    stroke: {
                        curve: 'smooth',
                        width: 2
                    },
                    markers: {
                        size: 0,
                    },
                    grid: {
                        show: false
                    },
                    chart: {
                        id: "basic-bar",
                        dropShadow: {
                            enabled: true,
                            top: 0,
                            left: 0,
                            blur: 3,
                            opacity: 0.3
                        },
                    },
                    xaxis: {
                        categories: [0]
                    }
                },
                series: [
                    {
                        name: "series-1",
                        data: [0]
                    }
                ]
            },
            chart3: {
                options: {
                    colors: ['#00e396'],
                    stroke: {
                        curve: 'smooth',
                        width: 2
                    },
                    markers: {
                        size: 0,
                    },
                    grid: {
                        show: false
                    },
                    chart: {
                        id: "basic-bar",
                        dropShadow: {
                            enabled: true,
                            top: 0,
                            left: 0,
                            blur: 3,
                            opacity: 0.3
                        },
                    },
                    xaxis: {
                        categories: [0]
                    }
                },
                series: [
                    {
                        name: "series-1",
                        data: [0]
                    }
                ]
            }
        };
    }
    // componentDidMount() {
    //     if(this.state.countryCode){
    //         this.getAllData(this.state.countryCode);
    //     }


    // }
    static getDerivedStateFromProps = (props, state) => {
        if (props.countryCode !== state.countryCode) {

            console.log(props.countryCode, 'props country code')
            console.log(state, 'update')
            return {
                update: true,
                countryCode: props.countryCode
            }
        }
        return {

        }
    }
    shouldComponentUpdate(p, nextState) {
        if (nextState.countryCode !== this.state.countryCode || nextState.update) {
            this.setState({
                update: false
            })
            this.getAllData(nextState.countryCode)
            return true
        } else if (this.state.show) {
            this.setState({
                show: false
            })
            return true
        }
        return false
    }


    getAllData = async (countryCode) => {
        this.setState({
            // loading: false
        })
        countryCode = countryCode.toUpperCase();
        let currentDate = new Date().toISOString().slice(0, 10)
        let data = await fetch(`https://api.coronatracker.com/v5/analytics/trend/country?countryCode=${countryCode}&startDate=2020-01-01&endDate=${currentDate}`);
        data = await data.json();
        console.log(data)
        let total_confirmed = [];
        let total_deaths = [];
        let total_recovered = [];
        let last_updated = [];
        let cols = 100;
        let x = Math.ceil(data.length / cols)
        total_confirmed.push(data[1].total_confirmed - data[0].total_confirmed)
        total_deaths.push(data[1].total_deaths - data[0].total_deaths)
        total_recovered.push(data[1].total_recovered - data[0].total_recovered)
        for (let i = x; i < data.length; i += x) {
            total_confirmed.push(data[i].total_confirmed - data[i - x].total_confirmed)
            total_deaths.push(data[i].total_deaths - data[i - x].total_deaths)
            total_recovered.push(data[i].total_recovered - data[i - x].total_recovered)
        }
        total_confirmed.push(data[data.length - 1].total_confirmed - data[data.length - 2].total_confirmed)
        total_deaths.push(data[data.length - 1].total_deaths - data[data.length - 2].total_deaths)
        total_recovered.push(data[data.length - 1].total_recovered - data[data.length - 2].total_recovered)
        x = Math.ceil(data.length / cols)
        last_updated.push(data[0].last_updated.slice(0, 10));
        for (let i = x; i < data.length; i += x) {
            last_updated.push(data[i].last_updated.slice(0, 10))
        }
        last_updated.push(data[data.length - 1].last_updated.slice(0, 10));
        this.setState({
            show: true,
            chart1: {
                options: {
                    xaxis: {
                        categories: last_updated
                    }
                },
                series: [
                    {
                        name: "Confirmed",
                        data: total_confirmed
                    }
                ]
            },
            chart2: {
                options: {
                    xaxis: {
                        categories: last_updated
                    }
                },
                series: [
                    {
                        name: "Death",
                        data: total_deaths
                    }
                ]
            },
            chart3: {
                options: {
                    xaxis: {
                        categories: last_updated
                    }
                },
                series: [
                    {
                        name: "Recovered",
                        data: total_recovered
                    }
                ]
            }
            , loading: true,
        })
    }
    render() {
        console.log(this.state)
        if (true) {
            return (
                <div className="h-5/6 flex flex-col justify-between">

                    <CountrySubInfoBox countryCode={this.state.countryCode} data={this.props.data} />

                    <h3 className="text-center pt-4 pb-2 text-blue-400 font-bold" >Confirmed</h3>
                    <div className="app">
                        <div className="row">
                            <div className="mixed-chart h-64">
                                <Chart
                                    options={this.state.chart1.options}
                                    series={this.state.chart1.series}
                                    type="line"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-center pt-4 pb-2 text-red-400 font-bold" >Death</h3>
                    <div className="app">
                        <div className="row">
                            <div className="mixed-chart h-64">
                                <Chart
                                    options={this.state.chart2.options}
                                    series={this.state.chart2.series}
                                    type="line"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-center pt-4 pb-2 text-green-400 font-bold" >Recovered</h3>
                    <div className="app">
                        <div className="row">
                            <div className="mixed-chart h-64">
                                <Chart
                                    options={this.state.chart3.options}
                                    series={this.state.chart3.series}
                                    type="line"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="h-5/6 flex flex-col justify-between text-white" id="chart">
                    Loading....
                </div>
            )
        }

    }
}


export default CountryChart;
