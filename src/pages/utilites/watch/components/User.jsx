import StopWatch from "./StopWatch";
import '../styles/stopWatch.css';
import { useState, useRef, useEffect} from "react";

function User({props, user,reset, groupLap,style}) {

    const [lapCounter,setLapCounter] = useState(0)

/*     useEffect(()=>{
        if (user){
            lapsCalc(lapResults.current.length + 1)
        }
    }, [lapResults]); */



    const lapsCalc=(lapNumber)=>{
        setLapCounter(lapNumber)
    }

    return ( 
        <div className="user" 
            draggable={true}
            style={style}>
            <div className="user_list" key={user.id}>
                <div className="user_list_title">
                    <p className="user_item">{user.name}</p>
                    <p className="user_lapCounter">Lap {lapCounter}</p>
                </div>
                <StopWatch props={props} user={user} reset={reset} groupLap = {groupLap} key={user.id}/> 
            </div>
    </div>
     );
}

export default User;