import React, { useEffect, useState } from 'react'
import { BASE_URL, key } from './request'

function SectionPage({ section }) {
    const [movies, setMovies] = useState([])
    const fetchSection = async (section) => {
        switch (section) {
            case 'TV Shows':
                fetch(`${BASE_URL}discover/tv?api_key=${key}&sort_by=popularity.desc`)
                    .then(doc => {
                        doc.json().then(data => setMovies(data.results))
                    })
                break;
            case "Movies":
                fetch(`${BASE_URL}discover/movie?api_key=${key}&sort_by=popularity.desc`)
                    .then(doc => {
                        doc.json().then(data => setMovies(data.results))
                    })
                break;
            case "Latest":
                fetch(`${BASE_URL}discover/movie?api_key=${key}&primary_release_year=2021`)
                    .then(doc => {
                        doc.json().then(data => setMovies(data.results))
                    })
        }

    }
    return (
        <div>

        </div>
    )
}

export default SectionPage
