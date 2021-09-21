import React, { useEffect, useState } from 'react'
import './Header.css'
import { BASE_URL, type } from './request'
import { AiFillCaretRight } from 'react-icons/ai'
import { CgDetailsMore } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'

function Header({ changeDetail, playHandle, changeSection }) {
    const [movie, setMovie] = useState([])
    const fetchTrending = async () => {

        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=d03ccd3f8ae255e9b5fa0f7c48581e8c')
            .then((movieList) => {
                movieList.json().then((data) => {
                    setMovie(data.results[Math.floor(Math.random() * 20)])
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
                    <h1>{movie?.title || movie?.original_title || movie?.original_name || movie?.name}</h1>
                    <p>{truncate(movie?.overview)}</p>
                    <div className='header_content_buttons'>
                        <NavLink to="/detail" className='watch_btn_container header_btn'><button className="watch_btn" onClick={() => changeDetail(movie)}><CgDetailsMore />MORE DETAIL</button></NavLink>
                        <button className="header_btn play_btn" onClick={() => playHandle(movie)}><AiFillCaretRight /> PLAY TRAILER</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
