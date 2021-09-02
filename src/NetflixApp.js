import React, { useState } from 'react'
import TrailerVideo from './TrailerVideo'
import movieTrailer from 'movie-trailer'
import DetailPage from './DetailPage';
import HomePage from './HomePage';

function NetflixApp() {
    const [movieTrailerURL, setMovieTrailerURL] = useState("")
    const [detailMovie, setDetailMovie] = useState({})
    const changeMovieTrailer = (movie) => {
        console.log(movie)
        movieTrailer(movie?.title || movie?.original_title || movie?.original_name)
            .then(response => {
                if (response) {
                    const urlParams = new URLSearchParams(new URL(response).search);
                    setMovieTrailerURL(urlParams.get("v"))

                }
                else {
                    alert("Apology the movie is not available right now")
                }
            })
    }
    const changeDetail = (movie) => {
        setDetailMovie(movie)
    }
    return (
        <div>
            <HomePage changeDetail={changeDetail} />
            <DetailPage movie={detailMovie} changeMovieTrailer={changeMovieTrailer} />
            <TrailerVideo movieTrailerURL={movieTrailerURL} />
        </div>
    )
}

export default NetflixApp
