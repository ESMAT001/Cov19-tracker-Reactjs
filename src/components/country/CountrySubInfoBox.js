import React from 'react'
import Status from '../global/Status'
function CountrySubInfoBox({ data, countryCode }) {
    let countryData = {

    };
    countryCode = countryCode.toUpperCase();
    for (let i = 0; i < data.length; i++) {
        if (data[i].countryCode === countryCode) {
            countryData.countryCode = countryCode;
            countryData.countryName = data[i].countryName;
            countryData.totalConfirmed = data[i].totalConfirmed;
            countryData.totalDeaths = data[i].totalDeaths;
            countryData.totalRecovered = data[i].totalRecovered;
            countryData.totalActiveCases = data[i].activeCases;
        }
    }

    const componentsCls = (color) => {
        const darkCls = `dark:bg-${color}-800 dark:bg-opacity-30 capitalize `;

        const lightCls = `text-${color}-600 tex-base sm:text-lg px-2 font-bold w-full text-center py-8 rounded hover:shadow-lg hover:bg-${color}-100 transition duration-300 ease-in-out`

        return lightCls + " " + darkCls
    }

    return (
        <div className="w-full mt-4" id="chart">
            <h2 className="text-gray-100 py-4 text-center text-lg" >{countryData.countryName} Status </h2>
            <div className="w-ful grid grid-cols-3 ">
                <Status
                    data={countryData.totalActiveCases}
                    totalConfirmed={countryData.totalConfirmed}
                    cls={componentsCls}
                    color='yellow'>
                    Active <i className="far fa-lungs-virus text-2xl"></i>
                </Status>
                <Status
                    data={countryData.totalDeaths}
                    totalConfirmed={countryData.totalConfirmed}
                    cls={componentsCls}
                    color='red'>
                    Death <i className="far fa-skull text-2xl"></i>
                </Status>
                <Status
                    data={countryData.totalRecovered}
                    totalConfirmed={countryData.totalConfirmed}
                    cls={componentsCls}
                    
                    color='green'>
                    Recovered <i className="far fa-heartbeat text-2xl"></i>
                </Status>
            </div>
        </div>
    )
}

export default React.memo(CountrySubInfoBox)
