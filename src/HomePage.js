import React, { useState } from 'react'
import "./HomePage.css"
import Header from './Header'
import RowList from './RowList';
import Nav from './Nav'

function HomePage({ changeDetail, playHandle }) {
    return (
        <div>
            <Nav />
            <Header playHandle={playHandle} changeDetail={changeDetail} />
            <RowList changeDetail={changeDetail} />
        </div>
    )
}

export default HomePage
