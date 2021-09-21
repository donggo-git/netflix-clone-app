import React, { useEffect, useState } from 'react'
import { BASE_URL, key } from './request'
import { AiFillStar, AiOutlineArrowLeft } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import "./SectionPage.css"

function SectionPage({ section }) {
    const [movies, setMovies] = useState([])
    const fetchSection = async (section) => {

        if (section === 'TV Shows') {
            await fetch(`${BASE_URL}discover/tv?api_key=${key}&sort_by=popularity.desc`)
                .then(doc => {
                    doc.json().then(data => {
                        console.log(data.results)
                        setMovies(data.results)
                    })
                })
        }
        if (section === "Movies") {
            await fetch(`${BASE_URL}discover/movie?api_key=${key}&sort_by=popularity.desc`)
                .then(doc => {
                    doc.json().then(data => setMovies(data.results))
                })
        }
        if (section === "Latest") {
            await fetch(`${BASE_URL}discover/movie?api_key=${key}&primary_release_year=2021`)
                .then(doc => {
                    doc.json().then(data => setMovies(data.results))
                })
        }
    }
    const calculateVote = (vote) => {
        let arr = []
        console.log(Math.round(vote / 2))
        for (let i = 0; i <= Math.round(vote / 2) - 1; i++) {
            arr.push(1)
        }
        return arr;
    }
    const truncate = (overview) => {
        if (overview) {
            let arr = overview.split(" ")
            return arr.slice(0, 18).join(" ") + " ...."
        }
        return overview
    }
    useEffect(() => fetchSection(section), [])
    return (
        <div className="page">
            <NavLink to="/">
                <AiOutlineArrowLeft className="return_btn" />
            </NavLink>
            <h1>{section}</h1>

            <div className="section_movieList">
                {movies?.map(movie => (
                    <div className="movie" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }}>
                        <div className="section_movie_content">
                            <h1>{movie.name || movie?.title || movie?.original_title || movie?.original_name}</h1>
                            <div className="voting_rate">
                                <div className="voting_start">{calculateVote(movie?.vote_average).map(() => <AiFillStar />)}</div>
                                <div className="voting_score">{movie?.vote_average / 2}</div>
                            </div>
                            <p>{truncate(movie?.overview)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionPage
