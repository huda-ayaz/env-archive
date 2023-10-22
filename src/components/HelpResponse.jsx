import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link, Router } from 'react-router-dom';

const HelpResponse = () => {
    console.log("help");
    return(
        <div className='response'>
            <p className='terminal-text'>{'>'} ls: to view all available files</p>
            <p className='terminal-text'>{'>'} view full [FILENAME]: to open your selected file </p>
            <p className='terminal-text'>{'>'} exit: shut down </p>
            <p className='terminal-text'>{'>'} help: to view these commands again </p>
            <p className='terminal-text'>{'>'} clear: to clear your terminal </p>
        </div>
    )
}

export default HelpResponse;