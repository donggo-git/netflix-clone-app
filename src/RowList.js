import React, { useState, useEffect } from 'react'
import { type } from './request'
import Row from './Row'
import { db } from './firebase'
import WishList from './WishList'

function RowList({ changeDetail }) {
    let arrType = Object.keys(type)

    return (
        <div>
            <WishList changeDetail={changeDetail} />
            {arrType.map((eachType) => (
                <Row key={eachType} title={eachType} changeDetail={changeDetail} />
            ))}
        </div>
    )
}

export default RowList
