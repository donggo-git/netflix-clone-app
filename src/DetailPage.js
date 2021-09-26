import React, { useState, useEffect } from 'react'
import './DetailPage.css'
import { BiRightArrow } from 'react-icons/bi'
import { AiOutlinePlus, AiOutlineArrowLeft, AiOutlineMinus } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import { MdDone } from 'react-icons/md'
import { db } from './firebase'

function DetailPage({ movie, playHandle, addToWishList, removeFromWishList }) {
    const [NotInWishList, setNotInWishList] = useState(false)
    const [isAnnounceWL, setIsAnnounceWL] = useState(false)
    let backgroundImg = {
        backgroundSize: "cover",
        backgroundImage: window.screen.width > 1000 ?
            `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.5)),
        url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
            : `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)),
        url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center',
    }

    const checkWishList = (movie) => {
        if (Object.keys(movie).length !== 0 && movie.id !== undefined) {
            const movieList = db.collection("wishList").doc(movie?.id.toString());
            movieList.get()
                .then((doc) => {
                    if (!doc.exists) setNotInWishList(true)
                    else setNotInWishList(false)
                })
        }
        else {
            return
        }
    }
    const handleClick = (movie) => {
        checkWishList(movie)

        if (NotInWishList) {
            addToWishList(movie)
            console.log("add")
        }
        else {
            removeFromWishList(movie)
            console.log("remove")
        }

        setIsAnnounceWL(true)
        setTimeout(() => setIsAnnounceWL(false), 600)
    }
    checkWishList(movie)

    return (
        <div className="page"
            style={window.screen.width > 1000 ? backgroundImg : {}}
        >
            <div className="detailPage">
                <NavLink to="/netflix-clone-app/">
                    <AiOutlineArrowLeft className="return_btn" />
                </NavLink>
                <div
                    className="detailPage_responsiveBackground"
                    style={window.screen.width <= 1000 ? backgroundImg : {}}
                ></div>
                <div className='detail_img_container'>
                    <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} height="100%" />
                </div>
                <div className="detail_content">
                    <h1>{movie?.title || movie?.original_title || movie?.original_name}</h1>
                    <div className="detail_content_dateNmatch">
                        <p className='detail_content_date'>{movie?.release_date?.split('-').reverse().join('/')}</p>
                        <p className="detail_content_match">{movie?.vote_average * 10}% Match</p>
                    </div>
                    <p className='detail_content_overview'>{movie?.overview}</p>
                    <div className="detail_btn">
                        <button className='detail_btn_play' onClick={() => playHandle(movie)}>
                            <BiRightArrow className='detail_btn_icons' />   PLAY
                        </button>
                        <button className="detail_btn_watchList" onClick={() => { handleClick(movie) }}>
                            {/*change icon when movie in wish list*/}

                            {!NotInWishList ?
                                <AiOutlineMinus className='detail_btn_icons' /> :
                                <AiOutlinePlus className='detail_btn_icons' />
                            }

                            {!NotInWishList ? "REMOVE" : "MY LIST"}
                        </button>
                    </div>
                </div>
            </div>
            <CSSTransition
                in={isAnnounceWL} timeout={300}
                classNames="alert"
                unmountOnExit
            >


                <div className="addToWL">
                    <MdDone />
                </div>

            </CSSTransition>

        </div>
    )
}

export default DetailPage
