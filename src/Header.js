import React, { useEffect, useState } from 'react'
import './Header.css'
import { BASE_URL, type } from './request'
import { AiFillCaretRight, AiOutlinePlus } from 'react-icons/ai'

function Header() {
    const [movie, setMovie] = useState([])
    const [headerImg, setHeaderImg] = useState()
    const fetchTrending = () => {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=d03ccd3f8ae255e9b5fa0f7c48581e8c')
            .then((movieList) => {
                movieList.json().then((data) => {
                    setMovie(data.results[Math.floor(Math.random() * 20)])
                    console.log(data.results)
                })
            })

    }
    useEffect(fetchTrending, [])
    const truncate = (overview) => {
        if (overview) {
            let arr = overview.split(" ")
            return arr.slice(0, 25).join(" ") + " ...."
        }
        return overview
    }
    return (
        <div className="header">
            <div
                className="header_background_img"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)),
                    url('https://image.tmdb.org/t/p/original/${window.screen.width > 1000 ? movie?.backdrop_path : movie?.poster_path}')`,

                }}
            >
                <div className="header_content">
                    <h1>{movie?.title || movie?.original_title}</h1>
                    <p>{truncate(movie?.overview)}</p>
                    <div className='header_content_buttons'>
                        <button className="watch_btn"><AiFillCaretRight /> WATCH</button>
                        <button className="addList_btn"><AiOutlinePlus /> ADD LIST</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
