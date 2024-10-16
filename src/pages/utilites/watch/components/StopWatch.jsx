import { useEffect, useRef, useState } from "react";
import '../styles/stopWatch.css'

function StopWatch({props,users,reset}) {
    const [isRunning,setIsRunning] = useState(false);
    const [isFinish,setIsFinish] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isHide, setIsHide] = useState(true)
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const mainStartTimeRef = useRef(0);
    const mainFinishTimeRef = useRef(0);
    const [lapResults,setLapResults] = useState([])

    const mainTimerIsRunning = props[0]
    const deleteUser = props[1]
  
    useEffect(()=>{

        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current)
            },200);
            
        }

        return()=>{
            clearInterval(intervalIdRef.current)
        }

    }, [isRunning]);

    useEffect(()=>{

        if(mainTimerIsRunning){
            start()
        }

    }, [mainTimerIsRunning]);

    useEffect(()=>{

        if(reset[0]){
            resert();
            reset[1](false)
        }

    }, [reset]);

    function lapVisible(){
        setIsHide(!isHide)
    }

    function start(){
        startTimeRef.current = Date.now();
        setIsRunning(true)
        if(!lapResults.length){
            mainStartTimeRef.current = startTimeRef.current
        }
    }

    function stop(){
        if (!isRunning){
            setIsFinish(true)
            setElapsedTime(mainFinishTimeRef.current - mainStartTimeRef.current)
        }
        else{
            setIsRunning(false);
            setLapResults([...lapResults,{elapsedTime:elapsedTime, startLapTime: startTimeRef.current}])
            mainFinishTimeRef.current = Date.now()
        }
    }

    function resert(){
        setElapsedTime(0);
        setIsRunning(false);
        setLapResults([])
        setIsFinish(false)
    }
    function lap(){
        if(isRunning){     
            setLapResults([...lapResults,{elapsedTime:elapsedTime, startLapTime: startTimeRef.current}])
            startTimeRef.current = Date.now()
        }
    }
    function clearFunc(){

        if (!isFinish && lapResults.length){
            let LapArr = lapResults.slice(-1)
            startTimeRef.current = LapArr[0].startLapTime
            setLapResults(lapResults.slice(0,-1))
            setIsRunning(true);
        }
        else{
            deleteUser(users)
        }

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
        <div className="stopwatch" onClick={lapVisible}>
            <div className="stopwatch_wrapper">
                <div className={users? "display_user" :"display"}>{formatTime(elapsedTime)}</div>
                {users
                    ?<div className="user_button-control" onClick={(e)=>e.stopPropagation()}>
                        <button className="button button_lap" onClick={lap}>Lap</button><button className="button button_finish" onClick={stop}>Finish</button>
                    </div>
                    :<div/>
                }
                {users && isHide
                    ?<div className="user_laps">
                        <div className="user_lapsTime">
                           {lapResults.map((objLap,index)=>
                           <div className="user_lapsTime_el" key={index}>
                               <b className="user_lapsTime_el_listNumber">{index+1}</b>{formatTime(objLap.elapsedTime)}
                           </div>
                           )}
                        </div>
                        <div className="user_button-lastLap" onClick={(e)=>e.stopPropagation()}><button className="button button_lastLap" onClick={clearFunc}>{(!isFinish && lapResults.length)?'←':'✖'}</button></div>
                    </div>
                    :<div/>
                }
            </div>
        </div>
    );
}
export default StopWatch;