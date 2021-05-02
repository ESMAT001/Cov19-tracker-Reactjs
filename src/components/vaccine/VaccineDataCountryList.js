import React from 'react';
import vaccineDataSet from '../../vaccineDataSet.json';
import vaccineCountryListLink from '../../vaccineCountryListLinks.json';

function VaccineDataCountryList() {
    return (
        <div className="dark:text-gray-100 text-gray-700 antialiased my-10 text-center">
            <h2 className="text-xl">Vaccination against COVID-19 has now started in 195 locations.</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Location</td>
                            <td>Source</td>
                            <td>Vaccines</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vaccineDataSet.map((country, index) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{country.location}</td>
                                        <td><a href={vaccineCountryListLink[index]}
                                            className="text-blue-500"
                                        >{country.source}</a></td>
                                        <td>{country.vaccines}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VaccineDataCountryList
