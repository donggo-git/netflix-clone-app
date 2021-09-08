import React, { useState, useEffect } from 'react'
import { type } from './request'
import Row from './Row'
import { db } from './firebase'

function RowList({ changeDetail }) {
    let arrType = Object.keys(type)

    return (
        <div>
            {arrType.map((eachType) => (
                <Row key={eachType} title={eachType} changeDetail={changeDetail} />
            ))}
        </div>
    )
}

export default RowList
