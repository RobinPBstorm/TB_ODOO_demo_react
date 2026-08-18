import { useState } from "react";

export default function Timer () {
    const [time, setTime]= useState(0);
    let [running, setRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const handleClickStart = () => {
        if (running) {
            clearInterval(intervalId);
            setIntervalId(null);
        } 
        else {
            setIntervalId(setInterval(
                () => {
                    setTime(time => time + 1);
                },
                100
            ));
        }
        setRunning(running => !running)
    }
    let handleClickReset = () => {
        setTime(0)
    };

    return (
        <div>
            <p>{(parseInt(parseInt(time/10)/60).toString().padStart(2,'0'))}:{(parseInt(time/10)%60).toString().padStart(2,'0')}.{(time%10)}</p>
            <button onClick={handleClickStart}>{ !running ? "Start" : "Pause" }</button>
            <button onClick={handleClickReset}>Reset</button>
        </div>
    );
}

