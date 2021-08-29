import React, { useState } from 'react'
import "./HomePage.css"
import Header from './Header'
import RowList from './RowList';
import Nav from './Nav'

function HomePage() {
    return (
        <div>
            <Nav />
            <Header />
            {/*<RowList />*/}
        </div>
    )
}

export default HomePage
