import React, { useState } from 'react'
import "./HomePage.css"
import { AiOutlineSearch, AiFillCaretDown, AiFillBell, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'

function HomePage() {
    const linkStyle = {
        color: '#fff'
    }
    const [isNavClose, setNavClose] = useState(true)
    const navLinkStyleClose = {
        transform: 'translateX(-100%)'
    }
    const navLinkStyleOpen = {
        transform: 'translateX(0%)'
    }
    return (
        <div>
            <nav>
                <GiHamburgerMenu className="burger-icon" onClick={() => setNavClose(false)} />
                <img src="https://th.bing.com/th/id/R.d01a8fbdf7bbb4d9dc936d06e151039f?rik=M%2fRoSy9w3784Dg&riu=http%3a%2f%2fwww.tubefilter.com%2fwp-content%2fuploads%2f2016%2f07%2fNetflix_logo.jpg&ehk=P%2b64IrAZDD9owhjJ6jQ9ubpeHNhDoTjfAZZ0VABXp3E%3d&risl=&pid=ImgRaw&r=0" />
                <ul className="nav_link_list"
                    style={window.screen.width < 1000 ?
                        isNavClose ? navLinkStyleClose :
                            navLinkStyleOpen : ""
                    }
                >
                    <AiOutlineClose className="close-icon" onClick={() => setNavClose(true)} />
                    <li className="nav_link_homePage"><a href="#" style={linkStyle}>Home</a></li>
                    <li><a href="#">TV Shows</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Latest</a></li>
                    <li><a href="#">My List</a></li>
                </ul>
                <div className="nav_right_column">
                    <AiOutlineSearch />
                    <p>Search</p>
                    <AiFillBell />
                    <img src="https://th.bing.com/th/id/R.8b61c1b9698d53bf246e1e245240ebee?rik=kDstmfK1wN4eWA&pid=ImgRaw&r=0" />
                    <AiFillCaretDown />
                </div>
            </nav>
        </div>
    )
}

export default HomePage
