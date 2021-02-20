import React, { Component } from 'react';
import GlobalStatus from './global/GlobalStatus';
import CountryStatus from './country/CountryStatus';
import CountriesTable from './CountriesTable';

export const CountryCodeContext = React.createContext();
class Tracker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            country: "ir"
        }
    }

    componentDidMount() {
        this.getAllCountriesData()
    }
    getAllCountriesData = async () => {
        let data = await fetch('https://api.coronatracker.com/v3/stats/worldometer/country')
        data = await data.json()
        this.setState({ data })
    }
    handleCountryChange = (countryCode) => {
        this.setState({ country: countryCode })
    }

    render() {
        const cls = "z-40 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8";

        return (
            <main className="container xl:px-10 2xl:px-40 mx-auto">
                <div className={cls}>
                    <CountryCodeContext.Provider value={[this.state.data,this.handleCountryChange,this.state.country]}>
                        <GlobalStatus />
                        <CountryStatus 
                        // country={this.state.country} data={this.state.data}
                         />
                        {
                            this.state.data && <CountriesTable
                                // handleCountryChange={this.handleCountryChange}
                                // data={this.state.data}
                            />
                        }
                    </CountryCodeContext.Provider>



                </div>
            </main>
        )
    }
}

export default Tracker
