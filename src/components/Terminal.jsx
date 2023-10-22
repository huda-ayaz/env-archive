import React, { useContext, useState, useEffect, useCallback } from "react";
import { Navigate, redirect, useNavigate, Link } from "react-router-dom";
import "../App.css";
import "../stylesheets/Terminal.css";
import HelpResponse from "./HelpResponse";
import LsResponse from "./LsResponse";
import Popup from "./Popup";

const Terminal = () => {
  const [command, setCommand] = useState("");
  const [responses, setResponses] = useState([]);

  const checkCommand = useCallback((command) => {
    let res;
    if (command === "help") {
      res = <HelpResponse />;
    } else if (command === "ls") {
      res = <LsResponse />;
    } else if (command === "view full check-the-water.exe") {
      res = <Popup />;
    } else if (command === "exit") {
      res = (
        <p className="terminal-text">
          Time has run out {":("} Please try again!
        </p>
      );
    } else if (command === "clear") {
      setResponses([]);
    } else {
      res = <p className="terminal-text">Invalid input.</p>;
    }

    // Update responses array with user command and corresponding response
    setResponses((prevResponses) => [
      ...prevResponses,
      { command, response: res },
    ]);
    setCommand(""); // clear input after updating the responses list with the user's command and the system response for render
  }, []);

  return (
    <div id="window" className="terminal-container">
      <div>
        <div className="terminal-bar">
          <div className="terminal-bar-button">-</div>
          <div className="terminal-bar-button">□</div>
          <div className="terminal-bar-button close">ˣ</div>
        </div>
      </div>
      <p className="terminal-text">
        PC of the Global Ecological Archive Commission, a recollection of the
        world since you've seen it last.
      </p>
      <p className="terminal-text">
        Copyright 20XX YesterYear Corporation. All rights reserved.
      </p>
      <br />
      <p className="terminal-text">Enter 'help' to get started.</p>
      <br />
      <div className="terminal-content">
        {responses.map((item, i) => (
          <div key={i}>
            <p className="terminal-text">
              C:\Users\SiobhanB{">"} {item.command}
            </p>
            {item.response}
          </div>
        ))}
        <div className="request">
          <p className="terminal-text">C:\Users\SiobhanB{">"}</p>
          <input
            type="text"
            name="command"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                checkCommand(command);
              }
            }}
            className="cursor terminal-text"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;