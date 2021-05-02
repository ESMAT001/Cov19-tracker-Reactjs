
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
                grid: {
                    show: false
                },
                plotOptions: {
                    bar: {
                        columnWidth: '100%',
                        distributed: false,
                        rangeBarOverlap: true,
                        dataLabels: {
                            position: 'center'
                        }
                    }
                },
                dataLabels: {
                    enabled: true,

                },
                legend: {
                    show: true
                },
                xaxis: {
                    categories: ['Confirmed', 'Recovered', 'Active', 'Death'],

                }
                , yaxis: {
                    show: true,
                }
            },
            series: [
                {
                    name: "Confirmed",
                    data: [totalConfirmed]
                },
                {
                    name: "Recovered",
                    data: [totalRecovered]
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
    yaxisShow=()=>{
        if (window.innerWidth < 500) {
            this.setState({
                options: {
                    chart: {
                        id: "basic-bar"
                    },
                    grid: {
                        show: false
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '100%',
                            distributed: false,
                            rangeBarOverlap: true,
                            dataLabels: {
                                position: 'center'
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,

                    },
                    legend: {
                        show: true
                    },
                    xaxis: {
                        categories: ['Confirmed', 'Recovered', 'Active', 'Death'],

                    }
                    , yaxis: {
                        show: false,
                    }
                }
            })
        }else{
            this.setState({
                options: {
                    chart: {
                        id: "basic-bar"
                    },
                    grid: {
                        show: false
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '100%',
                            distributed: false,
                            rangeBarOverlap: true,
                            dataLabels: {
                                position: 'center'
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,

                    },
                    legend: {
                        show: true
                    },
                    xaxis: {
                        categories: ['Confirmed', 'Recovered', 'Active', 'Death'],

                    }
                    , yaxis: {
                        show: true,
                    }
                }
            })
        }
    }
    componentDidMount() {
        this.yaxisShow()
        window.addEventListener('resize',this.yaxisShow)
    }
    componentWillUnmount(){
        window.removeEventListener('resize');
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

export default GlobalStatusChart
