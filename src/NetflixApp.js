import React, { useState, useEffect } from 'react'
import TrailerVideo from './TrailerVideo'
import movieTrailer from 'movie-trailer'
import DetailPage from './DetailPage';
import HomePage from './HomePage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { db } from './firebase'
import './NetflixApp.css'
import SectionPage from './SectionPage';
import Loading from './Loading';

function NetflixApp() {
    //WL is initial for Watch List
    const [movieTrailerURL, setMovieTrailerURL] = useState("")
    const [detailMovie, setDetailMovie] = useState({})
    const [isTrailerShow, setIsTrailerShow] = useState(false)
    const [section, setSection] = useState("Latest")
    const playHandle = (movie, e) => {

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
    //method change detail movie in detail page
    const changeDetail = (movie) => {
        console.log(movie.id)
        setDetailMovie(movie)
    }

    const addToWishList = (movie) => {
        //because movie id is number so we need to use toString() method
        const movieList = db.collection("wishList").doc(movie?.id.toString());
        movieList.get()
            .then((doc) => {

                db.collection("wishList").doc(movie?.id.toString()).set({
                    title: (movie?.title || movie?.original_title || movie?.original_name) ?? "",
                    release_date: movie?.release_date ?? "",
                    vote_average: movie?.vote_average ?? "",
                    overview: movie?.overview ?? "",
                    poster_path: movie?.poster_path ?? "",
                    backdrop_path: movie?.backdrop_path ?? ""
                })

            })
    }
    const removeFromWishList = (movie) => {
        if (Object.keys(movie).length !== 0 && movie.id !== undefined) {
            db.collection("wishList").doc(movie?.id.toString()).delete().then();
        }
    }
    const changeSection = (section) => {
        setSection(section)
    }
    return (
        <BrowserRouter>
            <Route render={({ location }) => (

                <TransitionGroup>
                    <CSSTransition timeout={window.screen.width > 1000 ? 600 : 400}
                        classNames={location.pathname === '/netflix-clone-app/' ? 'transitionToLeft' :
                            'transitionToRight'}
                        key={location.key}>
                        <Switch location={location}>
                            <Route path='/netflix-clone-app/' exact component={() =>
                                <HomePage
                                    changeDetail={changeDetail}
                                    playHandle={playHandle}
                                    addToWishList={addToWishList}
                                    playHandle={playHandle}
                                    changeSection={changeSection}
                                />} />
                            <Route path='/detail' component={() =>
                                <DetailPage
                                    movie={detailMovie}
                                    playHandle={playHandle}
                                    addToWishList={addToWishList}
                                    removeFromWishList={removeFromWishList}
                                />}
                            />
                            <Route path="/section" component={() =>
                                <SectionPage
                                    section={section}
                                    changeDetail={changeDetail}
                                />}
                            />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
            {/*<Loading />*/}
            <TrailerVideo movieTrailerURL={movieTrailerURL} isTrailerShow={isTrailerShow} closeTrailer={closeTrailer} />
        </BrowserRouter>
    )
}

export default NetflixApp
