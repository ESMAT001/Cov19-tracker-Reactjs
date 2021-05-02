import React from 'react';
import vaccineDataSet from '../../vaccineDataSet.json';
import vaccineCountryListLink from '../../vaccineCountryListLinks.json';

function VaccineDataCountryList() {
    return (
        <div className="dark:text-gray-100 text-gray-700 antialiased my-10 text-center">
            <h2 className="text-lg md:text-xl mb-6">Vaccination against COVID-19 has now started in 195 locations.</h2>
            <div className="transition duration-800 ease-in-out w-full shadow-xl overflow-scroll md:overflow-x-hidden  md:overflow-y-scroll md:col-span-2 dark:bg-inputDark bg-gray-100 bg-opacity-80 border-4  border-green-300 dark:border-transparent  pb-4 rounded dark:text-gray-100 text-gray-700 text-opacity-90 text-center h-96">
                <table className="w-full">
                    <thead >
                        <tr className='' >
                            <td className="sticky top-0 z-10 dark:bg-inputDark bg-gray-400 py-4 bg-opacity-50 dark:bg-opacity-70 ">Location</td>
                            <td className="sticky top-0  z-10 dark:bg-inputDark bg-gray-400 py-4 bg-opacity-50 dark:bg-opacity-70 ">Source</td>
                            <td className="sticky top-0  z-10 dark:bg-inputDark bg-gray-400 py-4 bg-opacity-50 dark:bg-opacity-70 ">Vaccines</td>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-700 divide-opacity-75">
                        {
                            vaccineDataSet.map((country, index) => {
                                return (
                                    <tr className="divide-x divide-blue-700 divide-opacity-75" key={index}>
                                        <td className="p-1 md:p-2 text-sm">{country.location}</td>
                                        <td className="p-1 md:p-2 text-sm"><a href={vaccineCountryListLink[index]}
                                            className="text-blue-500"
                                        >{country.source}</a></td>
                                        <td className="p-2 md:py-3 md:px-12 text-sm">{country.vaccines}</td>
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
