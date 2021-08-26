import React, { useState, useEffect } from 'react'
import { type, BASE_URL } from './request'
import './Row.css'

function Row({ title }) {
    const [MovieList, setMovieList] = useState([])
    const fetchByTitle = () => {
        fetch(`${BASE_URL}${type[title]}`)
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
                    <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        key={movie?.id} height='100%'
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
