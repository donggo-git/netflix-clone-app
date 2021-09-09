import React, { useState, useEffect } from 'react'
import TrailerVideo from './TrailerVideo'
import movieTrailer from 'movie-trailer'
import DetailPage from './DetailPage';
import HomePage from './HomePage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { db } from './firebase'
import './NetflixApp.css'

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

    const addToWishList = (movie) => {

        const movieList = db.collection("wishList").doc(movie?.id.toString());
        movieList.get()
            .then((doc) => {
                if (!doc.exists) {
                    db.collection("wishList").doc(movie?.id.toString()).set({
                        title: (movie?.title || movie?.original_title || movie?.original_name) ?? "",
                        release_date: movie?.release_date ?? "",
                        vote_average: movie?.vote_average ?? "",
                        overview: movie?.overview ?? "",
                        poster_path: movie?.poster_path ?? "",
                        backdrop_path: movie?.backdrop_path ?? ""
                    })
                }
                else return;
            })
    }
    return (
        <BrowserRouter>
            <Route render={({ location }) => (

                <TransitionGroup>
                    <CSSTransition timeout={300} classNames={location.pathname === '/' ? 'transitionToRight' : 'transitionToLeft'} key={location.key}>
                        <Switch>
                            <Route path='/' exact component={() =>
                                <HomePage
                                    changeDetail={changeDetail}
                                    playHandle={playHandle}
                                />} />
                            <Route path='/detail' component={() =>
                                <DetailPage
                                    movie={detailMovie}
                                    playHandle={playHandle}
                                    addToWishList={addToWishList}
                                />}
                            />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />

            <TrailerVideo movieTrailerURL={movieTrailerURL} isTrailerShow={isTrailerShow} closeTrailer={closeTrailer} />
        </BrowserRouter>
    )
}

export default NetflixApp
