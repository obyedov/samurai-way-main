import React from "react";
import st from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={st.nav}>
            <ul>
                <li className={`${st.item} ${st.active}`}><a href="#/">Profile</a></li>
                <li className={st.item}><a href="#/">Messages</a></li>
                <li className={st.item}><a href="#/">News</a></li>
                <li className={st.item}><a href="#/">Music</a></li>
                <li className={st.item}><a href="#/">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navbar