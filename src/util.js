export const countryDataLink = (countryCode, currentDate) => {
    return `https://api.coronatracker.com/v5/analytics/trend/country?countryCode=${countryCode}&startDate=2020-01-01&endDate=${currentDate}`;
}

export const allCountriesLink = 'https://api.coronatracker.com/v3/stats/worldometer/country';


export const countryNewsLink = (countryName, countryCode,limit) => {
    return `https://api.coronatracker.com/news/trending?limit=${limit}&offset=0&countryCode=${countryCode}&country=${countryName}&language=en`;
}


export const worldNewsLink=(limit)=>{
    return `https://api.coronatracker.com/news/trending?limit=${limit}&offset=&language=en`;
}