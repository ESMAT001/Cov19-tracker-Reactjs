
import React, { Component } from "react";
import Chart from "react-apexcharts";

class GlobalStatusChart extends Component {
    constructor(props) {
        super(props);
        const { totalActiveCases, totalConfirmed, totalDeaths, totalRecovered } = this.props;
        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ['Confirmed', 'Recovered', 'Active', 'Death']
                }
            },
            series: [
                {
                    name: "Confirmed",
                    data: [totalConfirmed]
                },
                {
                    name: "Recovered",
                    data: [ totalRecovered]
                },
                {
                    name: "Active",
                    data: [totalActiveCases]
                }
                ,
                {
                    name: "Death",
                    data: [totalDeaths]
                }
            ]
        };
    }

    render() {
        try {
            return (
                <div className="app ">
                    <div className="row">
                        <div className="mixed-chart h-96">
                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type="bar"
                                height="100%"
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            );
        } catch (error) {
            console.error(error);
        }
    }
}

// function GlobalStatusChart({ totalActiveCases, totalConfirmed, totalDeaths, totalRecovered }) {
//     // const globalData=useContext(globalDataContext);
//     // console.log("hook context global",globalData)

//     const cls = "w-full h-96 bg-gray-300 mt-6"
//     return (
//         <div className={cls}>

//         </div>
//     )
// }

export default GlobalStatusChart
