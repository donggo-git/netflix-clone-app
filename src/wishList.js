import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { db } from './firebase'

function WishList({ changeDetail }) {
    const [wishList, setWishList] = useState([])
    const getWishList = () => {
        db.collection("wishList").onSnapshot((snapshot) => {
            let tempList = snapshot.docs.map(doc => ({
                id: doc.id,
                movie: doc.data()
            }))
            setWishList(tempList)
        })
    }
    useEffect(() => getWishList(), [])
    return (
        <div className="Row">
            <h2>My list</h2>
            <div className="Row_imgList">
                {wishList?.map(movie => (
                    <NavLink to='/detail' className="Row_imgList_imgContainer" key={movie.id}>
                        {/*because firebase separate id with the other, so we put them back
                          *when we change detail movie in detailPage
                        */}
                        <img src={`https://image.tmdb.org/t/p/original${window.screen.width > 1000 ? movie.movie.backdrop_path : movie.movie.poster_path}`}
                            key={movie.movie.id} height='100%' onClick={() => {
                                let movieChange = { ...movie.movie }
                                movieChange.id = movie.id
                                changeDetail(movieChange)
                            }}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default WishList
