import React, { useState } from 'react'
import { type } from './request'
import Row from './Row'
import { db } from './firebase'

function RowList({ changeDetail }) {
    let arrType = Object.keys(type)
    const [wishList, setWishList] = useState([])
    const getWishList = () => {
        db.collection("wishList").onSnapshot((snapshot) => {
            let tempList = []
            tempList = snapshot.docs.map(doc => ({
                id: doc.id,
                movie: doc.data()
            }))
            setWishList(tempList)
        })
    }
    getWishList()
    return (
        <div>
            {arrType.map((eachType) => (
                <Row key={eachType} title={eachType} changeDetail={changeDetail} />
            ))}
        </div>
    )
}

export default RowList
