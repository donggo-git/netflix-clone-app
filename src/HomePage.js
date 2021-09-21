import React, { useState } from 'react'
import "./HomePage.css"
import Header from './Header'
import RowList from './RowList';
import Nav from './Nav'

function HomePage({ changeDetail, playHandle, addToWishList, changeSection }) {
    return (
        <div className="page">
            <Nav changeSection={changeSection} />
            <Header playHandle={playHandle} changeDetail={changeDetail} addToWishList={addToWishList} playHandle={playHandle} />
            <RowList changeDetail={changeDetail} />
        </div>
    )
}

export default HomePage
