import React from 'react'

function wishList({ movies }) {
    return (
        <div className="Row">
            <h2>Wish list</h2>
            <div className="Row_imgList">
                {movies.map(movie => (
                    <NavLink to='/detail' className="Row_imgList_imgContainer" key={movie?.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${window.screen.width > 1000 ? movie?.backdrop_path : movie?.poster_path}`}
                            key={movie?.id} height='100%' onClick={() => changeDetail(movie)}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default wishList
