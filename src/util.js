const baseURI = 'https://api-cov19-tracker.herokuapp.com';


export const global='https://api.coronatracker.com/v3/stats/worldometer/global';

export const countryDataLink = (countryCode, currentDate) => {
    return baseURI + `/analytics?countryCode=${countryCode}&endDate=${currentDate}`;
}

export const allCountriesLink = baseURI + '/country';


export const countryNewsLink = (countryName, countryCode, limit) => {
    return baseURI + `/news?limit=${limit}&countryCode=${countryCode}&country=${countryName}`;
}


export const worldNewsLink = (limit) => {
    return baseURI + `/news?limit=${limit}&offset=&language=en`;
}

export const vaccineTrialDataLink = baseURI + "/vaccine";



export const vaccineStatusLink = baseURI + "/vaccine/coverage";