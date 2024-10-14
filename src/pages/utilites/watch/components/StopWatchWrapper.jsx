import { useState, useRef} from "react";
import UserList from "./UserList";
import StopWatch from "./StopWatch";
import '../styles/stopWatch.css'

function StopWatchWrapper({userArr,deleteUser}) {

    const [isRunning,setIsRunning] = useState(false);
    const [reset,setReset] = useState(false)

    function allStart(){
        setIsRunning(true);
    }

    function allStop(){
        setIsRunning(false);
    }
    function allReset(){
        setReset(!reset)
        setIsRunning(false)
    }

    return ( 
        <div className="container">
            <StopWatch props={[isRunning,0]} reset={[reset,allReset]}/>
            <div className="button_block">
                { isRunning
                            ?<button onClick={allReset} className="button button_reset">Reset</button>
                            :<button onClick={allStart} className="button button_start">Start</button>
                        }
            </div>
            
            <UserList props={[isRunning,deleteUser]} users={userArr} reset={[reset,allReset]}/>
        </div>
    );
}

export default StopWatchWrapper;