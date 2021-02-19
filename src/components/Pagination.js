import React from 'react'

function Pagination({ page, setCurrentPage, data, perPage }) {
    let pages = []
    for (let i = 1; i < Math.ceil(data.length / perPage); i++) {
        pages.push(i)
    }
    let p = []
    for (let i = page + 1; i < page + 4; i++) {
        p.push(i)
    }
    const last = pages[pages.length - 1];

    const cls=" bg-blue-500 dark:bg-blue-700 dark:text-blue-500 dark:bg-opacity-40 mx-1 px-2 sm:px-3 sm:py-1 text-gray-100 text-lg  rounded shadow-lg focus:outline-none"
    return (
        <div className="md:col-span-2  text-blue-500  mx-auto flex justify-center text-center">
            <button className={cls} key={1} onClick={() => setCurrentPage(1)}>1</button>
            {
                page !== 1 && <span>..</span>
            }
            {
                p.map((i) => {
                    return (
                        <button  className={cls} key={i} onClick={() => setCurrentPage(i)}>{i}</button>
                    )
                })
            }
            {
                page !== last && <span>..</span>
            }
            <button  className={cls} key={last} onClick={() => setCurrentPage(last)}>{last}</button>

        </div>
    )
}

export default Pagination
