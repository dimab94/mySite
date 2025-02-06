import StopWatch from "./StopWatch";
import '../styles/stopWatch.css';
import { useState} from "react";

function User({props, user,reset, groupLap,style}) {

    const [lapCounter,setLapCounter] = useState(0)

    const [userObj,setUserObj] = useState({...user, startTLap:null,resultList:null})

    console.log(user)

    const refreshUser=(arr)=>{
        setUserObj(arr)
    }

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
                <StopWatch props={props} userObj={[userObj,refreshUser]} lapsCounter={lapsCalc} reset={reset} groupLap = {groupLap} key={user.id}/> 
            </div>
    </div>
     );
}

export default User;