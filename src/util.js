export const countryDataLink = (countryCode, currentDate) => {
    return `https://api.coronatracker.com/v5/analytics/trend/country?countryCode=${countryCode}&startDate=2020-01-01&endDate=${currentDate}`;
}

export const allCountriesLink = 'https://api.coronatracker.com/v3/stats/worldometer/country';