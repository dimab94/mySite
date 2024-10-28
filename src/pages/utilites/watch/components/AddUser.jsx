import { useState } from "react";
import '../styles/stopWatch.css'

function AddUser({create}) {

    const [userName,SetUserName] = useState('')
    const [userGroup,SetUserGroup] = useState('')

    function addnewUser (e){
        e.preventDefault();
        const newUser = {
            id:Date.now(),
            group:userGroup,
            name:userName
        }
        create(newUser)
        SetUserName('')
        SetUserGroup('')
    }

    return ( 
        <form className='input_wrapper'>
            <div className="input_block">
                <input value={userGroup} onChange={event=>SetUserGroup(event.target.value)} className="input_group" type="number" min={1} placeholder="#"/>
                <input value={userName} onChange={event=>SetUserName(event.target.value)} className="input_name" type="text" placeholder="Name"/>
            </div>
            <button onClick={addnewUser} className="button button_add">Add</button>
        </form>
    );
}

export default AddUser;