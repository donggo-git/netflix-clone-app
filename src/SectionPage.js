import React, { useEffect, useState } from 'react'
import { BASE_URL, key } from './request'

function SectionPage({ section }) {
    const [movies, setMovies] = useState([])
    const fetchingTV = async () => {

    }
    const fetchSection = async (section) => {

        if (section === 'TV_Shows') {
            await fetch(`${BASE_URL}discover/tv?api_key=${key}&sort_by=popularity.desc`)
                .then(doc => {
                    doc.json().then(data => {
                        console.log(data.results)
                        setMovies(data.results)
                    })
                })
            console.log(section)
        }
        if (section === "Movies") {
            fetch(`${BASE_URL}discover/movie?api_key=${key}&sort_by=popularity.desc`)
                .then(doc => {
                    doc.json().then(data => setMovies(data.results))
                })
        }
        if (section === "Latest") {
            fetch(`${BASE_URL}discover/movie?api_key=${key}&primary_release_year=2021`)
                .then(doc => {
                    doc.json().then(data => setMovies(data.results))
                })
        }
    }

    useEffect(() => fetchSection(section), [])
    return (
        <div>
            <h1>{section}</h1>

            <div className="movies_list_container">
                {movies?.map(movie => (
                    <div className="movie">
                        <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
                        <p>{movie?.name || movie?.title || movie?.original_title || movie?.original_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionPage
