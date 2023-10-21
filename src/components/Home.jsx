import React, { useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import Popup from './Popup';
import Terminal from './Terminal';

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Terminal/>
            <Popup/>
        </div>
    )
}

export default Home;