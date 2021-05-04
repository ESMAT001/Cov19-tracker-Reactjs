import React, { useState, useEffect } from 'react'
import { vaccineTrialDataLink } from '../../util';



function VaccineTrialData() {
    const [data, setData] = useState(false)
    const [phases, setPhases] = useState([])
    const [source, setSource] = useState(false)
    const [totalCandidates, setTotalCandidates] = useState(0)

    useEffect(() => {
        const fetchData = async () => {

            let response = await fetch(vaccineTrialDataLink);
            response = await response.json();
            console.log(response.phases)
            setData(response.data);
            setPhases(response.phases);
            setSource(response.source);
            setTotalCandidates(response.totalCandidates);
        }
        fetchData()

    }, [])



    return (
        <>
            {
                data && <div className="dark:text-gray-100 text-gray-700 antialiased my-10 text-center">
                    <h2 className="text-lg md:text-xl mb-6 ">Vaccine Trial Data</h2>
                    <h3>Total Vaccine Candidates {totalCandidates}</h3>
                    <a href={source} className="text-blue-400"><p>Source</p></a>
                    <p className="mt-6 mb-1">Phases</p>
                    <table className="w-full sm:w-4/5 md:w-3/5 mx-auto text-center">
                        <thead>
                            <tr className="bg-blue-500 text-white dark:text-gray-100">
                                <td className="py-2">Phase</td>
                                <td>Candidate</td>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-600 divide-opacity-75">
                            {
                                phases.map((cur, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="py-2">{cur.phase}</td>
                                            <td>{cur.candidates}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <p className="mt-6 mb-2 text-base md:text-lg">Vaccines Info</p>
                    <div className="transition duration-800 ease-in-out w-full overflow-scroll md:overflow-x-hidden  md:overflow-y-scroll md:col-span-2  dark:border-transparent  pb-4 rounded dark:text-gray-100 text-gray-800  text-center h-96">
                        <table className="w-full">
                            <thead >
                                <tr className='text-white font-bold dark:bg-inputDark bg-blue-500 dark:bg-opacity-25' >
                                    <td className="sticky top-0 z-10 dark:bg-inputDark bg-blue-500  dark:bg-opacity-75 bg-opacity-75 py-2 ">Candidate</td>
                                    <td className="sticky top-0  z-10 dark:bg-inputDark bg-blue-500  dark:bg-opacity-75 bg-opacity-75 py-2 ">Institutions</td>
                                    <td className="sticky top-0  z-10 dark:bg-inputDark bg-blue-500  dark:bg-opacity-75 bg-opacity-75 py-2 ">Mechanism</td>
                                    <td className="sticky top-0  z-10 dark:bg-inputDark bg-blue-500  dark:bg-opacity-75 bg-opacity-75 py-2 ">Sponsors</td>
                                    <td className="sticky top-0  z-10 dark:bg-inputDark bg-blue-500  dark:bg-opacity-75 bg-opacity-75 py-2 ">Trial phase</td>

                                </tr>
                            </thead>
                            <tbody className="divide-y divide-blue-700 divide-opacity-75">
                                {
                                    data.map((vaccine, index) => {
                                        return (
                                            <tr className="" key={index}>
                                                <td className="p-1 md:p-2 text-sm">{vaccine.candidate}</td>
                                                <td className="p-1 md:p-2 text-sm text-pink-600">{vaccine.institutions}</td>
                                                <td className="p-2 md:py-3 md:px-12 text-sm text-purple-800 dark:text-purple-400">{vaccine.mechanism}</td>
                                                <td className=" text-sm text-green-600 dark:text-green-400">{vaccine.sponsors}</td>
                                                <td className="p-1 md:p-2 text-sm text-yellow-500 dark:text-yellow-400">{vaccine.trialPhase}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </>
    )
}

export default VaccineTrialData
