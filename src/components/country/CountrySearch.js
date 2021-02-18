import React from 'react'

function CountrySearch({placeholderAnimation,clearPlaceHolder, placeholder,value, handleTextInputChange }) {
    const cls = " bg-gray-100 bg-opacity-60  text-gray-700 text-opacity-70 shadow-md focus:shadow-xl rounded py-4 pr-2 pl-12 w-full focus:outline-none transition duration-300 ease-in-out";
    const darkCls = "dark:bg-inputDark dark:placeholder-gray-300 dark:placeholder-opacity-40 dark:text-gray-300 dark:text-opacity-40"
    return (
        <div className="relative">
            <label className="absolute top-4 left-3" htmlFor="textInput">
                <i className="fal fa-search text-gray-700 text-opacity-40 dark:text-gray-300 dark:text-opacity-30 text-2xl "></i>
            </label>
            <input
                id="textInput"
                type="text"
                placeholder={placeholder}
                className={darkCls + cls}
                value={value}
                onChange={(e) => handleTextInputChange(e.target.value)}
                onFocus={(e)=>clearPlaceHolder("")}
                onBlur={placeholderAnimation}
            />
        </div>
    )
}

export default CountrySearch
