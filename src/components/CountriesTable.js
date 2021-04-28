import React, { useState, useContext } from 'react'
import Pagination from './Pagination'
import { CountryCodeContext } from './Tracker';

function CountriesTable() {
    const [data, handleCountryChange] = useContext(CountryCodeContext)
    const perPage = 10;
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const slicedData = data.slice(firstIndex, lastIndex)


    return (
        <>
            <div className="transition duration-800 ease-in-out w-full shadow-lg overflow-x-scroll md:col-span-2 dark:bg-inputDark border-2 border-blue-300 dark:border-transparent px-2 py-4 rounded dark:text-gray-100 text-gray-700 text-opacity-90 text-center">
                <table className="table-fixed min-w-full">
                    <thead>
                        <tr className="text-lg ">
                            <th className="w-1/12">Country</th>
                            <th className="w-1/12 px-4">Confirmed</th>
                            <th className="w-1/12 px-4">Active</th>
                            <th className="w-1/12 px-4">Death</th>
                            <th className="w-1/12 px-4">Recovered</th>
                            <th className="w-1/12 px-4">Critical</th>
                            <th className="w-1/12 px-4">Confirmed per million</th>
                            <th className="w-1/12 px-4">Death per million</th>
                            <th className="w-1/12 px-4">Daily confirmed</th>
                            <th className="w-1/12 px-4">Daily death</th>
                            <th className="w-2/12">last Updated</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-700 divide-opacity-75">

                        {
                            slicedData.map((country) => {
                                let { countryCode, countryName, activeCases, totalConfirmed, totalCritical, totalDeaths, totalRecovered, totalConfirmedPerMillionPopulation, totalDeathsPerMillionPopulation, dailyConfirmed, dailyDeaths, lastUpdated } = country;
                                countryCode = countryCode ? countryCode.toLowerCase() : countryCode;
                                lastUpdated = lastUpdated.substring(0, 10);
                                return (

                                    <tr className="divide-x divide-blue-700 divide-opacity-75 transition duration-300 ease-in-out cursor-pointer hover:bg-blue-700 hover:bg-opacity-20" key={countryCode + countryName} onClick={() => {
                                        handleCountryChange(countryCode,countryName);
                                    }}>

                                        <td className="flex items-center py-4 pl-4 pr-2" >
                                            {
                                                countryCode && <span className="w-14">
                                                    <img className="w-full rounded " src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${countryCode}.svg`} alt={`${countryName}-flag`} />
                                                </span>
                                            }
                                            <span className="ml-2">
                                                {countryName}
                                            </span>
                                        </td>
                                        <td className="px-3 text-blue-600 font-semibold">
                                            {totalConfirmed}
                                        </td>
                                        <td className="px-3 text-yellow-600 font-semibold">
                                            {activeCases}
                                        </td>
                                        <td className="px-3 text-red-600 font-semibold">
                                            {totalDeaths}
                                        </td>
                                        <td className="px-3 text-green-600 font-semibold">
                                            {totalRecovered}
                                        </td>
                                        <td className="px-2 text-pink-600 font-semibold">
                                            {totalCritical}
                                        </td>
                                        <td className="px-2 text-purple-600 font-semibold">
                                            {totalConfirmedPerMillionPopulation}
                                        </td>
                                        <td className="px-2 text-indigo-600 font-semibold">
                                            {totalDeathsPerMillionPopulation}
                                        </td>
                                        <td className="px-2 text-blue-400 font-semibold">
                                            {dailyConfirmed}
                                        </td>
                                        <td className="px-2 text-red-400 font-semibold">
                                            {dailyDeaths}
                                        </td>
                                        <td className="px-2">
                                            {lastUpdated}
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            <Pagination
                data={data}
                perPage={perPage}
                page={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}

export default CountriesTable
