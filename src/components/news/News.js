import React, { useState, useEffect } from 'react'
import { countryNewsLink } from '../../util';



function News({ countryName, countryCode }) {

    useEffect(() => {
        console.log('news fetch data');
        const fetchData = async () => {
            let data = await fetch(countryNewsLink(countryName, countryCode));
            data=await data.json();
            console.log(data);
        }
        if (countryName) {
            fetchData();
        }
    }, [countryName,countryCode])


    return (
        <div className="text-indigo-50">
            News
        </div>
    )
}

export default News
