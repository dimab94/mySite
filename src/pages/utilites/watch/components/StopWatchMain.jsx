import { useEffect, useRef, useState } from "react";
import '../styles/stopWatch.css'

function StopWatchMain({props,clearFunc}) {
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const mainStartTimeRef = useRef(0);
    const mainTimerIsRunning = props
    const [reset,allReset] = clearFunc
    
    useEffect(()=>{

        if(mainTimerIsRunning){
            mainStartTimeRef.current = Date.now()
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - mainStartTimeRef.current)
            },100);
            
        }

        return()=>{
            clearInterval(intervalIdRef.current)
        }

    }, [mainTimerIsRunning]);

    useEffect(()=>{

        if(reset){
            resert();
            allReset(false)
        }

    }, [reset]);

    function resert(){
        setElapsedTime(0);
    }

    function stringVer(number){
        return String(number).padStart(2,'0')
    }

    function formatTime(fulllSeconds){

        let hours = Math.floor(fulllSeconds / (1000 * 60 * 60));
        let minutes = Math.floor(fulllSeconds/ (1000 * 60) % 60);
        let seconds = Math.floor(fulllSeconds/ (1000)%60);
        let millisecods = Math.floor((fulllSeconds % 1000) /10);

        hours = stringVer(hours)
        minutes = stringVer(minutes)
        seconds = stringVer(seconds)
        millisecods = stringVer(millisecods)

        return `${hours}:${minutes}:${seconds}`
    }

    return ( 
        <div className="stopwatch">
            <div className="stopwatch_wrapper">
                <div className="display">{formatTime(elapsedTime)}</div>
            </div>
        </div>
    );
}
export default StopWatchMain;