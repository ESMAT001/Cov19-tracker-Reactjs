import React from 'react'

function CountrySubInfoBox({data,countryCode}) {
    let p={

    };
    countryCode=countryCode.toUpperCase();
    for (let i = 0; i < data.length; i++) {
        if(data[i].countryCode===countryCode){
            p.totalConfirmed=data[i].totalConfirmed;
            p.totalDeaths=data[i].totalDeaths;
            p.totalRecovered=data[i].totalRecovered;
        }
    }
console.log(p)
    return (
        <div className="text-white">
{countryCode}
        </div>
    )
}

export default React.memo(CountrySubInfoBox)
