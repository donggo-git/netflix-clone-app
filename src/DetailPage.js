import React from 'react'

function DetailPage({ movie }) {
    let backgroundImg = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
    return (
        <div className="detailPage"
            style={ }
        >
            <div className='detail_img_container'>
                <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
            </div>
            <div className="detail_content">
                <h1>{movie?.title || movie?.original_title || movie?.original_name}</h1>
                <p>{movie?.release_date.split('_').reverse().join('/')}</p>
                <p>{movie?.overview}</p>
                <button>WATCH</button>
                <button>ADD TO WATCH LIST</button>
            </div>
        </div>
    )
}

export default DetailPage
