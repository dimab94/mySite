import { useState } from "react";
import '../styles/stopWatch.css'

function AddUser({create}) {

    const [userName,SetUserName] = useState('')
    const [userGroup,SetUserGroup] = useState('')
    const defaultValue = -1

    function addnewUser (e){
        e.preventDefault();
        const finalValue = userGroup === '' ? defaultValue : userGroup
        const newUser = {
            id:Date.now(),
            group:finalValue,
            name:userName,
            startTLap:null,
            resultList:null
        }
        create(newUser)
        SetUserName('')
        SetUserGroup('')
    }

    function numberFilter (e){
        const newValue = e
        if(/^\d*$/.test(newValue)){
            SetUserGroup(Number(newValue))
        }
    }

    return ( 
        <form className='input_wrapper'>
            <div className="input_block">
                <input value={userGroup} onChange={e=>numberFilter(e.target.value)} className="input_group" type="number" min={1} step={1} placeholder="#"/>
                <input value={userName} onChange={event=>SetUserName(event.target.value)} className="input_name" type="text" placeholder="Name"/>
            </div>
            <button onClick={addnewUser} className="button button_add">Add</button>
        </form>
    );
}

export default AddUser;