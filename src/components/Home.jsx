import React, { useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import Popup from './Popup';
import Terminal from './Terminal';
import "../App.css";
import "../stylesheets/Home.css";

const Home = () => {
    return(
        <div>
            <Terminal/>
            <Popup/>
        </div>
    )
}

export default Home;