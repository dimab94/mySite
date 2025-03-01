import { useState, useRef} from "react";
import UserList from "./UserList";
import StopWatchMain from "./StopWatchMain";
import '../styles/stopWatch.css'

function StopWatchWrapper({userArr,deleteUser}) {

    const [isRunning,setIsRunning] = useState(false);
    const [reset,setReset] = useState(false)
    const [finished, setFinished] = useState(false)

    function allStart(){
        setIsRunning(true);
    }

    function allStop(){
        setIsRunning(false);
        setFinished(true)
    }
    function allReset(){
        setReset(!reset)
        setIsRunning(false)
        setFinished(false)
    }

    return ( 
        <div className="container-watch">
            <StopWatchMain props={isRunning} clearFunc={[reset,allReset]}/>
            <div className="button_block">
                { finished || isRunning
                            ?<button onClick={allStop} className="button button_start">Finish</button>
                            :<button onClick={allStart} className="button button_start">Start</button>
                        }
                <button onClick={allReset} className="button button_reset">Reset</button>
            </div>
            
            <UserList props={[isRunning,finished,deleteUser]} userArr={userArr} reset={[reset,allReset]}/>
        </div>
    );
}

export default StopWatchWrapper;