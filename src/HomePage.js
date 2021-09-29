import React from 'react'
import "./HomePage.css"
import Header from './Header'
import RowList from './RowList';
import Nav from './Nav'

function HomePage({ changeDetail, playHandle, addToWishList, changeSection }) {
    return (
        <div className="page">
            <Nav changeSection={changeSection} changeDetail={changeDetail} />
            <Header playHandle={playHandle} changeDetail={changeDetail} addToWishList={addToWishList} />
            <RowList changeDetail={changeDetail} />

        </div>
    )
}

export default HomePage
