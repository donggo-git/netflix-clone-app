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
            <h2>Wish list</h2>
            <div className="Row_imgList">
                {wishList?.map(movie => (
                    <NavLink to='/detail' className="Row_imgList_imgContainer" key={movie.movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original${window.screen.width > 1000 ? movie.movie.backdrop_path : movie.movie.poster_path}`}
                            key={movie.movie.id} height='100%' onClick={() => changeDetail(movie.movie)}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default WishList
