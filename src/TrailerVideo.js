import React, { useState } from 'react'
import YouTube from 'react-youtube'

function TrailerVideo({ movieTrailerURL }) {
    const [movie, setMovie] = useState("");
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div>
            <YouTube videoId={movieTrailerURL} opts={opts} />
            <div className='modal'></div>
        </div>
    )
}

export default TrailerVideo
