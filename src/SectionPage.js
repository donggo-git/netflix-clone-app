import React, { useEffect, useState } from 'react'
import { BASE_URL, key } from './request'
import { AiFillStar } from 'react-icons/ai'
import "./SectionPage.css"

function SectionPage({ section }) {
    const [movies, setMovies] = useState([])
    const fetchSection = async (section) => {

        if (section === 'TV Shows') {
            fetch(`${BASE_URL}discover/tv?api_key=${key}&sort_by=popularity.desc`)
                .then(doc => {
                    doc.json().then(data => {
                        console.log(data.results)
                        setMovies(data.results)
                    })
                })
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
        console.log(movies)
    }
    const calculateVote = (vote) => {
        let arr = []
        for (let i = 0; i <= vote / 2; i++) {
            arr.push(1)
        }
        return arr;
    }
    useEffect(() => fetchSection(section), [])
    return (
        <div className="page">
            <h1 className="section">{section}</h1>

            <div className="section_movieList">
                {movies?.map(movie => (
                    <div className="movie" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }}>
                        <div className="section_movie_content">
                            <h1>{movie.name || movie?.title || movie?.original_title || movie?.original_name}</h1>
                            <div className="section_movie_content_buttons">
                                <div>
                                    {calculateVote(movie?.vote_average).map(() => <AiFillStar />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionPage
