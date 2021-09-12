import React, { useEffect } from 'react'
import { BASE_URL, key } from './request'

function SectionPage({ section }) {
    const fetchSection = async (section) => {
        switch (section) {
            case 'TV Shows':
                fetch(`${BASE_URL}discover/tv?api_key=${key}&sort_by=popularity.desc`)
                break;
            case "Movies":
                fetch(`${BASE_URL}discover/movie?api_key=${key}&sort_by=popularity.desc`)
                break;
            case "Latest":
                fetch(`${BASE_URL}discover/movie?api_key=${key}&primary_release_year=2021`)
        }

    }
    return (
        <div>

        </div>
    )
}

export default SectionPage
