import React from 'react'
import { type } from './request'
import Row from './Row'

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
