import { useEffect, useRef, useState } from "react";
import '../styles/stopWatch.css'

function StopWatch({props,user,reset,groupLap}) {
    
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isHide, setIsHide] = useState(false)
    const [isRunning,setIsRunning] = useState(false);
    const [isFinish,setIsFinish] = useState(false);

    const mainFinishTimeRef = useRef(0);
    const intervalIdRef = useRef(null);

    const [mainTimerIsRunning,deleteUser] = props
    const [buttonLap,allLap] = groupLap

    const [lapResults,setLapResults] = useState([])
    const startTimeLap = useRef(0);
    const startTimeMain = useRef(0);

    //console.log(user)

    useEffect(()=>{
        if (user&&(buttonLap==user.group)){
            lap();
            allLap(false)
        }
    }, [buttonLap]);

    useEffect(()=>{

        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeLap.current)
            },100);
            
        }

        return()=>{
            clearInterval(intervalIdRef.current)
        }

    }, [isRunning]);

    useEffect(()=>{

        if(reset[0]){
            resert();
            reset[1](false)
        }

    }, [reset]);

    function lapVisible(){
        setIsHide(!isHide)
    }
    useEffect(()=>{

        if(mainTimerIsRunning){
            start();
            setIsFinish(false)
        }
        else{
            stop();
            setIsFinish(true);
            setElapsedTime(mainFinishTimeRef.current - startTimeMain.current);
        }

    }, [mainTimerIsRunning]);

    function start(){
        setIsRunning(true)
        startTimeLap.current = Date.now()
        if(!lapResults.length){
            startTimeMain.current = startTimeLap.current
        }
    }

    function stop(){
        if (!isRunning){
            setIsFinish(true)
            setElapsedTime(mainFinishTimeRef.current - startTimeMain.current)
        }
        else{
            setIsRunning(false);
            setLapResults([...lapResults,{elapsedTime:elapsedTime, startLapTime: startTimeLap.current}])
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
            setLapResults([...lapResults,{elapsedTime:elapsedTime, startLapTime: startTimeLap.current}])
            startTimeLap.current = Date.now()
        }
    }
    function clearFunc(){

        if (!isFinish && lapResults.length){
            let LapArr = lapResults.slice(-1)
            startTimeLap.current = LapArr[0].startLapTime
            setLapResults(lapResults.slice(0,-1))
            setIsRunning(true)
            console.log(lapResults)
        }
        else{
            deleteUser(user.id)
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
                <div className="display_user">{formatTime(elapsedTime)}</div>
                    <div className="user_button-control" onClick={(e)=>e.stopPropagation()}>
                        <button className="button button_lap" onClick={lap}>Lap</button><button className="button button_finish" onClick={stop}>Finish</button>
                    </div>
                {isHide
                    ?<div className="user_laps">
                        <div className="user_lapsTime">
                           {lapResults.map((objLap,index)=>
                           <div className="user_lapsTime_el" key={Math.floor(Math.random()*10000)}>
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