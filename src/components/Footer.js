import React from 'react'

function Footer() {
    let date=new Date();
    return (

        <div className="lg:col-span-2 flex flex-col text-gray-500 dark:text-gray-400 text-center pt-10 space-y-4">
            <div className="w-full flex justify-center space-x-4" >
                <a href="#" ><i className="fab fa-facebook-square text-3xl shadow-xl" ></i></a>
                <a href="#"><i className="fab fa-instagram text-3xl shadow-xl" ></i></a>
                <a href="#"><i className="fab fa-github-square text-3xl shadow-xl" ></i></a>
            </div>
            <p className="text-sm opacity-80" >Copyright <span className="text-2xl" >&#169;</span> {date.getFullYear()} Esmatullah Niazi </p>
        </div>

    )
}

export default Footer
