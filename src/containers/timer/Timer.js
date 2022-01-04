import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimerSVG = styled.div``;

const Timer = () => {
  const [timer, setTimer] = useState(1);
  const circumference = 11 * 2 * Math.PI;
  const offset = circumference - (((timer / 60) * 100) / 100) * circumference;

  // circle.style.strokeDasharray = `${circumference} ${circumference}`;
  // circle.style.strokeDashoffset = `${circumference}`;

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <TimerSVG style={{ marginRight: "24px" }}>
      <svg className="progress-ring" height="24" width="24">
        <circle
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={`${offset}`}
          className="progress-ring__circle"
          strokeWidth="2"
          stroke="white"
          fill="transparent"
          r="11"
          cx="12"
          cy="12"
        />
      </svg>
    </TimerSVG>
  );
};

export default Timer;
