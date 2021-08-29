import React from 'react'
import './DetailPage.css'

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
                <p className='detail_content_date'>{movie?.release_date?.split('-').reverse().join('/')}</p>
                <p>{movie?.overview}</p>
                <button>WATCH</button>
                <button>ADD TO WATCH LIST</button>
            </div>
        </div>
    )
}

export default DetailPage
