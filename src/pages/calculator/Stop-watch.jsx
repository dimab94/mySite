import { useState, useRef } from "react";

function StopWatch() {

    const [sec,setSec] = useState(0)

    let secHandler=useRef()

    const[timeValue,setTimeValue] = useState('00:00:02')

    const[tempTime,settempTime] = useState('')

    const distance = 42.2


    function secInc(){
        secHandler.current = setInterval(()=>{setSec(counter=>counter++)},1000)
    }

/*     const finalString = (number)=>{
        (number.toString()).padStart(2,'0')
    } */

    const result = []

/*     const tempEveryKm =(distance,tempKm)=>{
        for(let i = 1; i <= distance; i++){
            let lapSec = i*tempKm;
            let tempHour = (Math.floor(lapSec/3600)).toString;
            let tempMin = (Math.floor((lapSec%3600)/60)).toString;
            let tempSec = (Math.floor(lapSec%60)).toString;
            result.push()
        }
    } */

    const start =(value)=>{
        const arr = value.split(':');
        const totalSec = [arr[0]*3600,arr[1]*60,arr[2]*1].reduce((sum,current)=>sum+current);
        const tempKm = Math.floor(totalSec/distance)
        settempTime(`${tempMin}:${tempSec}`)
    }

    return ( 
        <div>
            <h1>{sec}</h1>
            <button className="btn btn-start" onClick={()=>console.log(sec)}>start</button>
            <button className="btn btn-stop">stop</button>
            <button className="btn btn-reset" onClick={clearInterval(secInc)}>reset</button>

            <div>
                <label htmlFor="appt">за сколько хочешь пробежать?</label><br />
                <input id="appt" type="time" step={1} 
                value={timeValue}
                onChange={(event)=>setTimeValue(event.target.value)}/>
                <br />
                <button onClick={()=>start(timeValue)}>Рассчитать</button>
                <div>
                    <h1>{tempTime}</h1>
                </div>
            </div>
        </div>

    );
}

export default StopWatch;