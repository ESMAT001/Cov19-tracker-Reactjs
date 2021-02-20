import React from 'react'

function Pagination({ page, setCurrentPage, data, perPage }) {
    let pages = []
    let totalPages = Math.ceil(data.length / perPage);
    for (let i = 1; i < totalPages; i++) {
        pages.push(i)
    }
    let iStart = page - 1
    let iEnd = page + 2
    if (iEnd >= totalPages) {
        iEnd = totalPages-1;
        iStart = totalPages-4;
    }
    if (iStart <= 1) {
        iStart = 2
        iEnd = 5
    }
    let p = []
    for (let i = iStart; i < iEnd; i++) {
        p.push(i)
    }
    const last = pages[pages.length - 1];

    const cls = " bg-blue-500 dark:bg-blue-700 dark:text-blue-500 dark:bg-opacity-40 mx-1 px-2 sm:px-3 sm:py-1 text-gray-100 text-lg  rounded shadow-lg focus:outline-none"
    return (
        <div className="md:col-span-2  text-blue-500  mx-auto flex justify-center text-center">
            <button className={cls} key={1} onClick={() => setCurrentPage(1)}>1</button>
            {
                page !== 1 && <span>..</span>
            }
            {
                p.map((i) => {
                    return (
                        <button className={cls} key={i} onClick={() => setCurrentPage(i)}>{i}</button>
                    )
                })
            }
            {
                page !== last && <span>..</span>
            }
            <button className={cls} key={last} onClick={() => setCurrentPage(last)}>{last}</button>

        </div>
    )
}

export default Pagination
