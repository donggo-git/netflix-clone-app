import React, { useState, useEffect } from 'react'
import { AiOutlineSearch, AiFillCaretDown, AiFillBell, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom';
import './Nav.css'

function Nav({ changeSection }) {
    const linkStyle = {
        color: '#fff'
    }
    const [isNavClose, setNavClose] = useState(true)
    const [isBlackNav, setIsBlackNav] = useState(false)
    const navLinkStyleClose = {
        transform: 'translateX(-500%)'
    }
    const navLinkStyleOpen = {
        transform: 'translateX(-20%)'
    }
    useEffect(() => {
        window.addEventListener(("scroll"), () => {
            if (window.scrollY > 580) setIsBlackNav(true)
            else setIsBlackNav(false)
        });

    }, [])
    return (
        <nav className={isBlackNav ? 'nav_black' : ""}>
            <GiHamburgerMenu className="burger-icon" onClick={() => setNavClose(false)} />
            <img src={window.screen.width >= 1000 ?
                "https://th.bing.com/th/id/R.3483cbba02fe083b87330a99857f59ed?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0" :
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png"} />
            <ul className="nav_link_list"
                style={window.screen.width < 1000 ?
                    isNavClose ? navLinkStyleClose :
                        navLinkStyleOpen : {}
                }
            >
                <AiOutlineClose className="close-icon" onClick={() => setNavClose(true)} />
                <li className="nav_link_homePage"><a href="#" style={linkStyle}>Home</a></li>
                <li onClick={(e) => changeSection(e.target.innerText)}><NavLink to="section">TV Shows</NavLink></li>
                <li onClick={(e) => changeSection(e.target.innerText)}><NavLink to="section">Movies</NavLink></li>
                <li onClick={(e) => changeSection(e.target.innerText)}><NavLink to="section">Latest</NavLink></li>
                <li><a href="#">My List</a></li>
            </ul>
            <div className="nav_right_column">
                <AiOutlineSearch className="nav_right_column_icon" />
                <p>Search</p>
                <AiFillBell className="nav_right_column_icon" />
                <img src="https://th.bing.com/th/id/R.8b61c1b9698d53bf246e1e245240ebee?rik=kDstmfK1wN4eWA&pid=ImgRaw&r=0" />
                <AiFillCaretDown className="nav_right_column_icon" />
            </div>
        </nav>
    )
}

export default Nav
