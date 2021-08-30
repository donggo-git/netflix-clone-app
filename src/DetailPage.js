import React from 'react'
import './DetailPage.css'
import { BiRightArrow } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'

function DetailPage({ movie }) {
    let backgroundImg = {
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.5    )),
        url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center',
    }
    return (
        <div className="detailPage"
            style={backgroundImg}
        >
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
                    <button className='detail_btn_play'>
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
