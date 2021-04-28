import React, { useState, useEffect } from 'react'
import { countryNewsLink, worldNewsLink } from '../../util';
import Modal from './Modal';


function News({ countryName, countryCode }) {
    const [countryNewsData, setCountryNewsData] = useState(false);
    const [worldNewsData, setWorldNewsData] = useState(false);
    useEffect(() => {
        console.log('news fetch data');
        const fetchData = async () => {
            let data = await fetch(countryNewsLink(countryName, countryCode));
            data = await data.json();
            console.log(data);
            setCountryNewsData(data.items);
        }
        if (countryName) {
            fetchData();
        }
    }, [countryName, countryCode])

    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch(worldNewsLink);
            data = await data.json();
            console.log(data.items);
            setWorldNewsData(data.items);
        }
        fetchData()
    }, [])

    const renderNews = (news, index) => {
        let { nid, urlToImage, title, description } = news;
        return (
            <div key={nid + "-" + index} className="bg-gray-200 bg-opacity-10 dark:bg-gray-500 dark:bg-opacity-5 flex flex-col md:flex-row rounded shadow-lg overflow-hidden items-center">
                <div className="md:w-2/6">
                    <img src={urlToImage} className="object-cover " alt={title} />
                </div>
                <div className="p-6 md:w-4/6">
                    <h3 className='text-xl font-semibold opacity-90'>{title}</h3>
                    <hr className=" md:hidden my-2 bg-gray-500 bg-opacity-70 shadow rounded" />
                    <p className="opacity-80 font-semibold  mt-2">{description}</p>
                    {/* <button className="bg-blue-600 text-white px-3 py-2 font-semibold shadow-lg rounded focus:outline-none hover:shadow-xl hover:bg-blue-700  transition duration-300 float-right mt-6">Read More</button> */}
                    <Modal newsInfo={news} />
                </div>
            </div>
        )
    }


    const cls = "flex flex-col space-y-10";

    const newsHeadingCls = "text-xl opacity-90 py-4 font-semibold text-center border-b-2 border-gray-400 border-opacity-80";
    return (
        <div className="dark:text-indigo-50 text-gray-600">
            {
                countryNewsData && <div className={cls}>
                    <h4 className={newsHeadingCls}>
                        Covid-19 news in {countryName}
                    </h4>
                    {
                        countryNewsData.map((news, index) => {
                            return renderNews(news, index);
                        })
                    }
                </div>
            }
            {
                worldNewsData && <div className={cls}>
                    <p className="border-gray-500 border-opacity-80 text-opacity-90" ></p>
                    <h4 className={newsHeadingCls}>
                        World news about covid-19
                     </h4>
                    <img src="" className="" alt="" />
                    {
                        worldNewsData.map((news, index) => {
                            return renderNews(news, index);
                        })
                    }
                </div>
            }

        </div>
    )
}

export default News
