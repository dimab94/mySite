import { useEffect, useRef, useState } from "react";
import '../styles/stopWatch.css'

function StopWatch({props,userObj,reset,groupLap,lapsCounter}) {
    
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isHide, setIsHide] = useState(false)
    const [isRunning,setIsRunning] = useState(false);
    const [isFinish,setIsFinish] = useState(false);

    const mainFinishTimeRef = useRef(0);
    const intervalIdRef = useRef(null);

    const [mainTimerIsRunning,mainTimerIsFinish,deleteUser] = props
    const [buttonLap,allLap] = groupLap

    const [lapResults,setLapResults] = useState([])
    const startTimeLap = useRef(0);
    const startTimeMain = useRef(0);
    const [user, refreshUser] = userObj
    const [resetAll,refreshResetAll] = reset

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

        if(resetAll){
            resert();
            refreshResetAll(false)
        }

    }, [resetAll]);

    useEffect(()=>{
        if(startTimeMain.current && isRunning){
            lapsCounter(lapResults.length+1)
        }
    }, [lapResults,startTimeMain.current,isRunning]);

    function lapVisible(){
        setIsHide(!isHide)
    }
    useEffect(()=>{

        if(mainTimerIsRunning){
            start();
            setIsFinish(false)
        }
        if(mainTimerIsFinish){
            stop();
            setIsFinish(true);
            setElapsedTime(mainFinishTimeRef.current - startTimeMain.current);
        }

    }, [mainTimerIsRunning]);

    useEffect(()=>{
        if(startTimeLap.current){
            refreshUser({...user, startTLap:startTimeLap.current,resultList:lapResults})
        }
    }, [startTimeLap.current]);

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
        lapsCounter('')
        setElapsedTime(0);
        setIsRunning(false);
        setLapResults([])
        setIsFinish(false)
        startTimeMain.current = 0
        mainFinishTimeRef.current = 0
        refreshUser({...user, startTLap:null,resultList:null})
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
            refreshUser({...user, startTLap:null,resultList:null})
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
                <div className="display_user">
                    
                    <div className="user_timer">{formatTime(elapsedTime)}</div>
                    </div>
                    <div className="user_button-control" onClick={(e)=>e.stopPropagation()}>
                        <button className="button button_lap" onClick={lap}>Lap</button><button className="button button_finish" onClick={stop}>Finish</button>
                    </div>
                {isHide
                    ?<div className="user_laps">
                        <div className="user_lapsTime">
                           {lapResults.map((objLap,index)=>
                           <div className="user_lapsTime_el" key={Math.floor(Math.random()*100000)}>
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