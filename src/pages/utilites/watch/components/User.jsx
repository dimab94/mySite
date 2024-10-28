import StopWatch from "./StopWatch";
import '../styles/stopWatch.css';

function User({props, user,reset}) {

    return ( 
        <div className="users">
            <div className="users_list" key={user.id}>
                <p className="users_item">{user.name}</p>
                <StopWatch props={props} user={user.id} reset={reset}/> 
            </div>
    </div>
     );
}

export default User;