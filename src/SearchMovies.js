import React, { useState, useEffect } from 'react'
import './SearchMovies.css'
import { BASE_URL, key } from './request'
import { NavLink } from 'react-router-dom'

function SearchMovies({ isSearchOpen, changeDetail }) {

    const [searchInput, setSearchInput] = useState("")
    const [searchList, setSearchList] = useState([])

    const searchOpen = {
        transform: 'scaleX(1)'
    }
    const searchClose = {
        transform: 'scaleX(0)'
    }

    const searchingMovie = async (searchInput) => {
        if (searchInput.length >= 3) {
            await fetch(`${BASE_URL}search/movie?api_key=${key}&query=${searchInput}`)
                .then(doc => {
                    doc.json().then(data => {
                        console.log(data.results)
                        setSearchList(data.results)
                    })
                })
        }
        else {
            setSearchList([])
        }
    }
    const handleChange = (input) => {
        setSearchInput(input)
    }
    useEffect(() => searchingMovie(searchInput), [searchInput])

    return (
        <div className="searchMovies" style={isSearchOpen ? searchOpen : searchClose}>
            <input type='text' value={searchInput} onChange={(e) => handleChange(e.target.value)} />
            <div className="searchMovies_movieList"
                style={searchList.length > 0 ? { height: 'calc(100vh - 57.5px)' }
                    : { height: '0' }}>
                {searchList.length > 0 ? searchList.map(movie => (
                    <NavLink to='./detail' key={movie.id}>
                        <div className="searchMovies_movie" onClick={() => changeDetail(movie)}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} height='100%' />
                            <p>{movie?.name || movie?.original_title || movie?.original_name || movie?.title}</p>
                        </div>
                    </NavLink>
                )) : <div></div>}
            </div>
        </div>
    )
}

export default SearchMovies
