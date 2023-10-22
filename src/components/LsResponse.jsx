import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link, Router } from 'react-router-dom';

const LsResponse = () => {
    return(
        <div className='response'>
            <p className='terminal-text'>{'>'} check-the-water.exe</p>
            <p className='terminal-text'>{'>'} CLASSIFIED </p>
            <p className='terminal-text'>{'>'} CLASSIFIED </p>
        </div>
    )
}

export default LsResponse;