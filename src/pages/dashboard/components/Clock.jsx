import React, { useState, useEffect } from "react";
import "../styles/Clock.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const newTime = new Date();
            setTime(newTime);
            setCurrentTime(
                `${newTime.getHours()}:${formatNumber(newTime.getMinutes())}:${formatNumber(newTime.getSeconds())}`
            );
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : number;
    };

    return (
        <div className="analog-clock">
            <div className="seconds" style = {{ transform: `rotatez(${time.getSeconds() * 6}deg)` }} />
            <div className="minutes" style = {{ transform: `rotatez(${time.getMinutes() * 6}deg)` }} />
            <div className="hours" style = {{ transform: `rotatez(${time.getHours() * 30}deg)` }} />
            <span className="twelve">12</span>
            <span className="one">1</span>
            <span className="two">2</span>
            <span className="three">3</span>
            <span className="four">4</span>
            <span className="five">5</span>
            <span className="six">6</span>
            <span className="seven">7</span>
            <span className="eight">8</span>
            <span className="nine">9</span>
            <span className="ten">10</span>
            <span className="eleven">11</span>
            <div className="digital-clock">{currentTime}</div>
        </div>
    );
};

export default Clock;