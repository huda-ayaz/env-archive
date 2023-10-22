import React, { useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Terminal.css";

const Terminal = () => {
    const [command, setCommand] = useState('');
    const [askHelp, setAskHelp] = useState(false);

    const checkCommand = () => {
        if (command === '/help') {
            setAskHelp(true);
        }
    }

    // useEffect(() => {
    //     const onEnter = () => {
    //         if (command === '/help') {
    //             alert('help');
    //         }
    //     }
    // }, [command]);
    // const onEnter = () = {
    //     if (input === '/help') {
            
    //     }
    // }
    return(
        <div className='window'>
            <div>
                <div className='terminal-bar'>
                    <div className='terminal-bar-button'>-</div>
                    <div className='terminal-bar-button'>□</div>
                    <div className='terminal-bar-button close'>ˣ</div>
                </div>
            </div>
            <p className='terminal-text'>PC of the Global Ecological Archive Commission, a recollection of the world since you've seen it last.</p>
            <p className='terminal-text'>Copyright 20XX YesterYear Corporation. All rights reserved.</p>
            <div className='request'>
                <p className='terminal-text'>C:\Users\SiobhanB{'>'} Enter '/help' </p>
                <input 
                    type="text" 
                    name="command"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setCommand(e.target.value);
                        }
                    }}
                    className='cursor terminal-text'>
                </input>
            </div>
            <div className='request'>
                <p className='terminal-text'>C:\Users\SiobhanB{'>'}  </p>
            </div>
        </div>
    )
}

export default Terminal;