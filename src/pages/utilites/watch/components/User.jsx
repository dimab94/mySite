import StopWatch from "./StopWatch";
import '../styles/stopWatch.css';

function User({props, user,reset, groupLap}) {
console.log(user)
    return ( 
        <div className="users">
            <div className="users_list" key={user.id}>
                <p className="users_item">{user.name}</p>
                <StopWatch props={props} user={user} reset={reset} groupLap = {groupLap}/> 
            </div>
    </div>
     );
}

export default User;