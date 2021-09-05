import React, { useState, useEffect } from 'react'
import { type, BASE_URL } from './request'
import './Row.css'
import { NavLink } from 'react-router-dom'

function Row({ title, changeDetail }) {
    const [MovieList, setMovieList] = useState([])
    const fetchByTitle = async () => {
        await fetch(`${BASE_URL}${type[title]}`)
            .then((movieList) => {
                movieList.json().then(data => {
                    setMovieList(data.results)
                })
            })
    }
    useEffect(() => {
        fetchByTitle()
    }, [])
    return (
        <div className="Row">
            <h2>{title}</h2>
            <div className="Row_imgList">
                {MovieList.map(movie => (
                    <NavLink to='/detail' className="Row_imgList_imgContainer" key={movie?.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${window.screen.width > 1000 ? movie?.backdrop_path : movie?.poster_path}`}
                            key={movie?.id} height='100%' onClick={() => changeDetail(movie)}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Row
