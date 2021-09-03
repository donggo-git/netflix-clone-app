import React, { useState } from 'react'
import './DetailPage.css'
import { BiRightArrow } from 'react-icons/bi'
import { AiOutlinePlus, AiOutlineArrowLeft } from 'react-icons/ai'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
import { NavLink } from 'react-router-dom'

function DetailPage({ movie, playHandle }) {
    let backgroundImg = {
        backgroundSize: "cover",
        backgroundImage: window.screen.width > 1000 ?
            `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.5)),
        url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
            : `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)),
        url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center',
    }

    return (
        <div className="detailPage"
            style={window.screen.width > 1000 ? backgroundImg : {}}
        >
            <NavLink to="/">
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
                    <button className="detail_btn_watchList">
                        <AiOutlinePlus className='detail_btn_icons' />WATCH LIST
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
