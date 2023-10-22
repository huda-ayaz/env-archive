import React, { useContext, useState, useEffect} from 'react';
import { useNavigate, Link, Navigate, Router } from 'react-router-dom';
import logo from "../assets/logo.png";
import "../App.css";
import "../stylesheets/Navbar.css";

const Navbar = ({isBlogUnlocked}) => {
    <script src="https://kit.fontawesome.com/866cc9ce13.js" crossorigin="anonymous"></script>
    const navigate = useNavigate();

    return(
        <div class="navigate">
            <nav>
                <i><img id = 'logo' src = {logo} /></i>
                <i>
                    <Link className = "text-link" to="/">
                        HOME
                    </Link>
                </i>
                <i>
                    <Link className = "text-link" to={isBlogUnlocked ? "/blog-unlocked" : "/"}>
                        {isBlogUnlocked && 'BLOG'}
                        {!isBlogUnlocked && '🔒'}
                    </Link>
                </i>
            </nav>
        </div>
    )
}

export default Navbar;