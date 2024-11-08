import StopWatch from "./StopWatch";
import '../styles/stopWatch.css';

function User({props, user,reset, groupLap,style}) {
    return ( 
        <div className="user" style={style}>
            <div className="user_list" key={user.id}>
                <p className="user_item">{user.name}</p>
                <StopWatch props={props} user={user} reset={reset} groupLap = {groupLap}/> 
            </div>
    </div>
     );
}

export default User;