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
            <div className="hide-scroll-bar transition duration-800 ease-in-out w-full shadow-xl overflow-x-scroll md:col-span-2 dark:bg-inputDark border-4 border-blue-400 dark:border-transparent pb-4 rounded dark:text-gray-100 text-gray-700 text-opacity-90 text-center">
                <table className="table-fixed min-w-full">
                    <thead>
                        <tr className="text-lg bg-blue-400 text-white  dark:bg-inputDark">
                            <th className="w-1/12  text-sm md:text-base">Country</th>
                            <th className="w-1/12 px-4 text-sm md:text-base">Confirmed</th>
                            <th className="w-1/12 px-4 text-sm md:text-base">Active</th>
                            <th className="w-1/12 px-4 text-sm md:text-base">Death</th>
                            <th className="w-1/12 px-4 text-sm md:text-base">Recovered</th>
                            <th className="w-1/12 px-4 text-sm md:text-base">Critical</th>
                            <th className="w-1/12 px-4 text-sm md:text-base">Confirmed per million</th>
                            <th className="w-1/12 px-4 text-sm md:text-base">Death per million</th>
                            <th className="w-1/12 px-4 text-sm md:text-base">Daily confirmed</th>
                            <th className="w-1/12 px-4 text-sm md:text-base">Daily death</th>
                            <th className="w-2/12 text-sm md:text-base">last Updated</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-700 divide-opacity-75">

                        {
                            slicedData.map((country) => {
                                let { countryCode, countryName, activeCases, totalConfirmed, totalCritical, totalDeaths, totalRecovered, totalConfirmedPerMillionPopulation, totalDeathsPerMillionPopulation, dailyConfirmed, dailyDeaths, lastUpdated } = country;
                                countryCode = countryCode ? countryCode.toLowerCase() : countryCode;
                                lastUpdated = lastUpdated.substring(0, 10);
                                return (

                                    <tr className="transition duration-300 ease-in-out cursor-pointer hover:bg-blue-400 hover:bg-opacity-10 transform hover:scale-105" key={countryCode + countryName} onClick={() => {
                                        handleCountryChange(countryCode,countryName);
                                    }}>

                                        <td className="flex items-center py-4 pl-4 pr-2" >
                                            {
                                                countryCode && <span className="w-14">
                                                    <img className="w-full rounded " loading="lazy" src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${countryCode}.svg`} alt={`${countryName}-flag`} />
                                                </span>
                                            }
                                            <span className="ml-2 text-sm md:text-base">
                                                {countryName}
                                            </span>
                                        </td>
                                        <td className="px-3 text-blue-600 font-semibold text-sm md:text-base">
                                            {totalConfirmed}
                                        </td>
                                        <td className="px-3 text-yellow-600 font-semibold text-sm md:text-base">
                                            {activeCases}
                                        </td>
                                        <td className="px-3 text-red-600 font-semibold text-sm md:text-base">
                                            {totalDeaths}
                                        </td>
                                        <td className="px-3 text-green-600 font-semibold text-sm md:text-base">
                                            {totalRecovered}
                                        </td>
                                        <td className="px-2 text-pink-600 font-semibold text-sm md:text-base">
                                            {totalCritical}
                                        </td>
                                        <td className="px-2 text-purple-600 font-semibold text-sm md:text-base">
                                            {totalConfirmedPerMillionPopulation}
                                        </td>
                                        <td className="px-2 text-indigo-600 font-semibold text-sm md:text-base">
                                            {totalDeathsPerMillionPopulation}
                                        </td>
                                        <td className="px-2 text-blue-400 font-semibold text-sm md:text-base">
                                            {dailyConfirmed}
                                        </td>
                                        <td className="px-2 text-red-400 font-semibold text-sm md:text-base">
                                            {dailyDeaths}
                                        </td>
                                        <td className="px-2 text-sm md:text-base">
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
