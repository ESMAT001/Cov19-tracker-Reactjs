import React, { useState, useEffect } from 'react'
import { database } from '../firebase/firebase';



function Footer() {
    let date = new Date();
    const viewsRef = 'data/views';
    const [views, setViews] = useState(0);

    database.ref(viewsRef).on('value', (snapshot) => {
        const val = snapshot.val();
        console.log('updating ui')
        if (views !== val)
            setViews(val)
    })

    useEffect(() => {
        database.ref(viewsRef).once('value')
            .then((snapshot) => database.ref(viewsRef).set(snapshot.val() + 1))
    }, [])

    return (

        <div className="lg:col-span-2 flex flex-col text-gray-500 dark:text-gray-400 text-center pt-10 space-y-4">
            <div className="w-full flex justify-center space-x-4" >
                <a href="https://www.facebook.com/esmat001/" target="blank" ><i className="fab fa-facebook-square text-3xl shadow-xl" ></i></a>
                <a href="https://www.instagram.com/Im_es_n/" target="blank"><i className="fab fa-instagram text-3xl shadow-xl" ></i></a>
                <a href="https://github.com/ESMAT001" target="blank"><i className="fab fa-github-square text-3xl shadow-xl" ></i></a>
            </div>
            <p className="text-sm opacity-80" >Website views: {views}</p>
            <p className="text-sm opacity-80" >Copyright <span className="text-2xl" >&#169;</span> {date.getFullYear()} Esmatullah Niazi </p>
        </div>

    )
}

export default Footer
