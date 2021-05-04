import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { vaccineStatusLink } from '../../util';


class VaccineStatus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
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
        };
    }

    fetchData = async () => {
        let data = await fetch(vaccineStatusLink);
        data = await data.json();
        const dateSeries = [];
        const numberSeries = [];

        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                dateSeries.push(key);
                numberSeries.push(data[key])
            }
        }

        const showYaxis = window.innerWidth < 500 ? false : true;

        this.setState({
            options: {
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
                    categories: dateSeries
                },
                yaxis: {
                    show: showYaxis
                }
            },
            series: [
                {
                    name: "Number of vaccinated people",
                    data: numberSeries
                }
            ]
        })
    }



    componentDidMount() {
        this.fetchData()
    }

    render() {
        try {
            return (
                <div className="mixed-chart h-96">
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        height="100%"
                        width="100%"
                    />
                </div>
            );
        } catch (error) {
            console.error(error);
        }
    }
}

export default VaccineStatus

