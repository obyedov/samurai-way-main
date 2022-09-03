import React from "react";
import st from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={st.nav}>
            <ul>
                <li className={`${st.item} ${st.active}`}><a href="src/components/Navbar/Navbar#/">Profile</a></li>
                <li className={st.item}><a href="src/components/Navbar/Navbar#/">Messages</a></li>
                <li className={st.item}><a href="src/components/Navbar/Navbar#/">News</a></li>
                <li className={st.item}><a href="src/components/Navbar/Navbar#/">Music</a></li>
                <li className={st.item}><a href="src/components/Navbar/Navbar#/">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navbar