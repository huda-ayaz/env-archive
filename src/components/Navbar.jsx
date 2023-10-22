import React, { useContext, useState, useEffect} from 'react';
import { useNavigate, Link, Navigate, Router } from 'react-router-dom';

const Navbar = ({isBlogUnlocked}) => {
    <script src="https://kit.fontawesome.com/866cc9ce13.js" crossorigin="anonymous"></script>
    const navigate = useNavigate();

    return(
        <div>
            <nav>
                <i>
                    <Link to="/">
                        HOME
                    </Link>
                </i>
                <i>
                    <Link to={isBlogUnlocked ? "/blog-unlocked" : "/"}>
                        {isBlogUnlocked && 'BLOG'}
                        {!isBlogUnlocked && '🔒'}
                    </Link>
                </i>
            </nav>
        </div>
    )
}

export default Navbar;