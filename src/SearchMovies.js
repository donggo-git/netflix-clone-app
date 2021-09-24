import React, { useState, useEffect } from 'react'
import './SearchMovies.css'
import { BASE_URL, key } from './request'

function SearchMovies({ isSearchOpen }) {

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
    }
    const handleChange = (input) => {
        setSearchInput(input)
    }
    useEffect(() => searchingMovie(searchInput), [searchInput])

    return (
        <div className="searchMovies" style={isSearchOpen ? searchOpen : searchClose}>
            <input type='text' value={searchInput} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default SearchMovies
