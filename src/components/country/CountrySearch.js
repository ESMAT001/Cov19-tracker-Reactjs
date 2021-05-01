import React from 'react'


const inputRef = React.createRef()

function CountrySearch({ placeholderAnimation, clearPlaceHolder, placeholder, value, handleTextInputChange, data, handleGetLocation }) {
    // const cls = " bg-gray-100 bg-opacity-60  text-gray-700 text-opacity-70 shadow-md focus:shadow-xl rounded py-4 pr-2 pl-12 w-full focus:outline-none transition duration-300 ease-in-out";
    // const darkCls = "dark:bg-inputDark dark:placeholder-gray-300 dark:placeholder-opacity-40 dark:text-gray-300 dark:text-opacity-40";

    const findCountry = (val) => {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].country === val) {
                    // console.log('found');
                    handleGetLocation(data[i].countryCode,data[i].countryName);
                    break;
                }
            }
        }
    }

    return (
        <div className="relative">
            <label className="absolute top-4 left-3 cursor-pointer" htmlFor="textInput" onClick={() => {
                handleTextInputChange('', true);
                findCountry(inputRef.current.value);
            }}>
                <i className="fal fa-search text-gray-700 text-opacity-40 dark:text-gray-300 dark:text-opacity-30 text-2xl "></i>
            </label>
            <input
                id="textInput"
                type="text"
                list="countries"
                ref={inputRef}
                placeholder={placeholder}
                className={"dark:bg-inputDark dark:placeholder-gray-300 dark:placeholder-opacity-40 dark:text-gray-300 dark:text-opacity-40 bg-gray-100 bg-opacity-60  text-gray-700 text-opacity-70 shadow-md focus:shadow-xl rounded py-4 pr-2 pl-12 w-full focus:outline-none transition duration-300 ease-in-out"}
                value={value}
                onChange={(e) => handleTextInputChange(e.target.value)}
                onKeyPress={(e) => {
                    if (e.code === "Enter") {
                        handleTextInputChange('', true)
                        findCountry(value)
                    }
                }}
                onFocus={(e) => clearPlaceHolder("")}
                onBlur={placeholderAnimation}
            />
            {
                data && <datalist id="countries" className="w-96 bg-red-600">
                    {
                        data.map((country) => {
                            return (
                                <option key={country.countryCode + country.country}>{country.country}</option>
                            )
                        })
                    }
                </datalist>
            }
        </div>
    )
}

export default CountrySearch
