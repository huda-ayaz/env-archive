import React, { useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Popup.css";

const Popup = () => {
    return(
        <div className="popup">
            <div className="terminal-bar pop">
                <div className="terminal-bar-button">-</div>
                <div className="terminal-bar-button">□</div>
                <div className="terminal-bar-button close">ˣ</div>
            </div>
            <button onClick={()=> window.open("./blog", "_blank")}>CHECK THE WATER!</button>
        </div>
    )
}

export default Popup;