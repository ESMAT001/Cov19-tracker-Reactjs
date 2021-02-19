import React from 'react'

function CountryChart({country}) {
    const cls="bg-gray-200 h-96"
    return (
        <div className={cls}>
            {country}
        </div>
    )
}

export default CountryChart
