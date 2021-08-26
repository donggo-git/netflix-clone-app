import React from 'react'
import { type } from './request'
import Row from './Row'

function RowList() {
    let arrType = Object.keys(type)
    return (
        <div>
            {arrType.map((eachType) => (
                <Row key={eachType} title={eachType} />
            ))}
        </div>
    )
}

export default RowList
