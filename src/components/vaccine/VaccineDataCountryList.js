import React from 'react';
import vaccineDataSet from '../../vaccineDataSet.json';
import vaccineCountryListLink from '../../vaccineCountryListLinks.json';

function VaccineDataCountryList() {
    return (
        <div className="dark:text-gray-100 text-gray-700 antialiased my-10 text-center">
            <h2 className="text-lg md:text-xl mb-1">Vaccination against COVID-19 has now started in 195 locations.</h2>
            <p className="mb-6 text-sm opacity-80">Scroll  on the table to see more data</p>
            <div className="hide-scroll-bar transition duration-800 ease-in-out w-full overflow-scroll md:overflow-x-hidden  md:overflow-y-scroll md:col-span-2  dark:border-transparent  pb-4 rounded dark:text-gray-100 text-gray-800  text-center h-96 ">
                <table className="w-full">
                    <thead >
                        <tr className='text-white font-bold bg-blue-500' >
                            <td className="sticky top-0 z-10  bg-blue-500 py-4 bg-opacity-75 ">Location</td>
                            <td className="sticky top-0  z-10  bg-blue-500 py-4 bg-opacity-75 ">Source</td>
                            <td className="sticky top-0  z-10  bg-blue-500 py-4 bg-opacity-75 ">Vaccines</td>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-700 divide-opacity-75">
                        {
                            vaccineDataSet.map((country, index) => {
                                return (
                                    <tr className="dividne-x divide-blue-700 divide-opacity-75" key={index}>
                                        <td className="p-1 md:p-2 text-sm text-red-500">{country.location}</td>
                                        <td className="p-1 md:p-2 text-sm font-bold"><a href={vaccineCountryListLink[index]}
                                            className="text-blue-500"
                                        >{country.source}</a></td>
                                        <td className="p-2 md:py-3 md:px-12 text-sm text-yellow-500 dark:text-yellow-400">{country.vaccines}</td>
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
