import StopWatch from "./StopWatch";
import '../styles/stopWatch.css';
import { useState} from "react";

function User({props, user,reset, groupLap,style}) {

    const [lapCounter,setLapCounter] = useState(0)
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
                <StopWatch props={props} user={user} reset={reset} groupLap = {groupLap} lapsCalc={lapsCalc}/> 
            </div>
    </div>
     );
}

export default User;