import React, { useState } from 'react'
import TrailerVideo from './TrailerVideo'
import movieTrailer from 'movie-trailer'
import DetailPage from './DetailPage';
import HomePage from './HomePage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function NetflixApp() {
    const [movieTrailerURL, setMovieTrailerURL] = useState("")
    const [detailMovie, setDetailMovie] = useState({})
    const [isTrailerShow, setIsTrailerShow] = useState(false)
    const playHandle = (movie) => {
        console.log(movie)
        movieTrailer(movie?.title || movie?.original_title || movie?.original_name)
            .then(response => {
                //check if we can find the trailer
                if (response) {
                    //if the trailer is available set that trailer and show the video
                    const urlParams = new URLSearchParams(new URL(response).search);
                    setMovieTrailerURL(urlParams.get("v"))
                    //show the trailer
                    setIsTrailerShow(true)
                }
                else {
                    alert("Apology the movie is not available right now")
                }
            })
    }
    const closeTrailer = () => {
        setIsTrailerShow(false)
    }
    const changeDetail = (movie) => {
        setDetailMovie(movie)
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={() =>
                    <HomePage
                        changeDetail={changeDetail}
                        playHandle={playHandle}
                    />} />
                <Route path='/detail' component={() =>
                    <DetailPage movie={detailMovie} playHandle={playHandle} />}
                />
            </Switch>
            <TrailerVideo movieTrailerURL={movieTrailerURL} isTrailerShow={isTrailerShow} closeTrailer={closeTrailer} />
        </BrowserRouter>
    )
}

export default NetflixApp
