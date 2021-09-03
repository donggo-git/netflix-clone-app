import React, { useState } from 'react'
import YouTube from 'react-youtube'
import './TrailerVideo.css'

function TrailerVideo({ movieTrailerURL, isTrailerShow, closeTrailer }) {
    const TrailerHide = {
        top: '200%',
    }
    const TrailerShow = {
        top: "50%",
    }
    const modalHide = {
        zIndex: -1,
        opacity: 0
    }
    const modalShow = {
        zIndex: 5,
        opacity: 1
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <div>
            <div className="Trailer_Container" style={isTrailerShow ? TrailerShow : TrailerHide}>
                <YouTube videoId={movieTrailerURL} opts={opts} />
            </div>
            <div
                className='modal'
                style={isTrailerShow ? modalShow : modalHide}
                onClick={() => closeTrailer()}>
            </div>
        </div>
    )
}

export default TrailerVideo
