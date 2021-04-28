import React, { useState, useEffect } from 'react'
import { countryNewsLink, worldNewsLink } from '../../util';



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
        let { nid, urlToImage, url, title, publishedAt, siteName, description, content } = news;
        return (
            <div key={nid + "-" + index} className="flex flex-row">
                <div>
                    <img src={urlToImage} alt={title} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="text-indigo-50">
            {
                countryNewsData && <div className="flex flex-col">
                    <h4>
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
                worldNewsData && <div>
                    <h4>
                        World news about covid19
                </h4>
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
