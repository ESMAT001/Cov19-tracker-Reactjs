import React, { Component } from 'react';
import GlobalStatus from './global/GlobalStatus';
import CountryStatus from './country/CountryStatus';
import CountriesTable from './CountriesTable';
import Footer from './Footer';
import { allCountriesLink } from '../util';
import News from './news/News';
import VaccineDataCountryList from './vaccine/VaccineDataCountryList';
import VaccineTrialData from './vaccine/VaccineTrialData';

export const CountryCodeContext = React.createContext();
class Tracker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            country: false,
            countryName: null,
            show: true
        }
    }

    componentDidMount() {
        this.getAllCountriesData();

    }
    getAllCountriesData = async () => {
        let data = await fetch(allCountriesLink);
        data = await data.json();
        this.setState({ data: data }, this.handleGetLocation);
    }
    handleCountryChange = (countryCode, countryName) => {
        this.setState({ country: countryCode, countryName: countryName })
        let bodyTag = document.getElementsByTagName('body')[0].getBoundingClientRect().y;
        let el = document.getElementById("chart").getBoundingClientRect().y;
        let calc = (Math.abs(bodyTag) - Math.abs(el)) - ((window.innerHeight * 12) / 100)
        window.scrollTo(0, calc);
    }
    handleGetLocation = (countryCodeFromSearch = false, countryNameFromSearch = false) => {
        // console.log("location "+countryCodeFromSearch);
        if (!countryCodeFromSearch) {
            if (window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(e => {

                    let { data } = this.state;
                    const lat = e.coords.latitude.toFixed(2);
                    const lng = e.coords.longitude.toFixed(2);

                    for (let i = 0; i < data.length; i++) {
                        if (data[i].lat === null || data[i].lng === null) {
                            continue;
                        }
                        let dataLat = data[i].lat.toFixed(2);
                        let dataLng = data[i].lng.toFixed(2);
                        if (((lat + 4) >= dataLat && (lat - 4) <= dataLat) && (lng + 4) >= dataLng && (lng - 4) <= dataLng) {
                            // console.log(data[i]);
                            // console.log('country form location');
                            this.setState({
                                show: false,
                                country: data[i].countryCode,
                                countryName: data[i].countryName
                            })
                            break;
                        }

                    }
                })
            }
        } else {
            this.setState({
                show: false,
                country: countryCodeFromSearch,
                countryName: countryNameFromSearch
            })
        }


    }
    render() {
        // const cls = "z-40 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8";
        // console.log(this.state)
        return (
            <>
                <main className="container xl:px-10 2xl:px-40 mx-auto">
                    <div className="z-40 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <CountryCodeContext.Provider value={[this.state.data, this.handleCountryChange, this.state.country]}>
                            <GlobalStatus />
                            <CountryStatus
                                country={this.state.country}
                                data={this.state.data}
                                show={this.state.show}
                                handleGetLocation={this.handleGetLocation}
                            />
                            {
                                this.state.data && <CountriesTable />
                            }
                        </CountryCodeContext.Provider>
                    </div>
                    <VaccineDataCountryList />
                    <VaccineTrialData />
                    <News countryName={this.state.countryName} countryCode={this.state.country} />
                </main>
                <Footer />
                <span className="hidden col-span-full  dark:bg-blue-800 bg-blue-200 text-blue-600 dark:bg-red-800 bg-red-200 text-red-600 dark:bg-green-800 bg-green-200 text-green-600 dark:bg-yellow-800 bg-yellow-200 text-yellow-600 dark:bg-purple-800 bg-purple-200 text-purple-600 dark:bg-pink-800 bg-pink-200 text-pink-600 -- bg-blue-600 bg-red-600 bg-green-600 bg-yellow-600 bg-purple-600 bg-pink-600 -- dark:bg-opacity-30 capitalize tex-base sm:text-lg px-2 font-bold w-full text-center py-8 rounded hover:shadow-lg shadow transform hover:scale-105  transition duration-300 ease-in-out" ></span>
            </>
        )
    }
}

export default Tracker
