import StopWatch from "./StopWatch";
import '../styles/stopWatch.css'

function UserList({props, users,reset}) {
    return ( 
        <div className="users">
            {users.map((user)=>
                <div className="users_list" key={user.id}>
                    <p className="users_item">{user.group} {user.name}</p>
                    <StopWatch props={props} users={user.id} reset={reset}/> 
                </div>
            )}
        </div>
    );
}

export default UserList;