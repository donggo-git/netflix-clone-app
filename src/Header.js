import React, { useEffect, useState } from 'react'
import { BASE_URL, type } from './request'

function Header() {
    const [trendingList, setTrendingList] = useState([])
    const [headerImg, setHeaderImg] = useState()
    const randomNumber = Math.random()
    const fetchTrending = () => {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=d03ccd3f8ae255e9b5fa0f7c48581e8c')
            .then((movieList) => {
                movieList.json().then((data) => {
                    setTrendingList(data.results)
                    console.log(data.results)
                })
            })

    }
    useEffect(fetchTrending, [])
    console.log(trendingList)
    return (
        <div>
            <img src={'https://image.tmdb.org/t/p/w500/' + trendingList[0]?.backdrop_path}
                width="100%"
            />
        </div>
    )
}

export default Header
