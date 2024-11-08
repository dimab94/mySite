import User from "./User";
import '../styles/stopWatch.css'
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function UserList({props, users,reset}) {

    const [groupLap,setGropupLap]=useState(false)
    const [isHide, setIsHide]=useState([])

    const colors = ['#213723','rgb(88 40 40)','rgb(124 102 19)','rgb(82 22 72)','rgb(22 82 77)','rgb(67 33 104)']
    /* users.sort((a,b)=>a.group-b.group) */

    const groupUsersByGroup = () => {
      return Object.values(
        users.reduce((acc, user) => {
          // Если группы еще нет в аккумуляторе, добавляем её как пустой массив
          if (!acc[user.group]) {
            acc[user.group] = [];
          }
          // Добавляем пользователя в соответствующую группу
          acc[user.group].push(user);
          return acc;
        }, {})
      );
    };

    const allLap = (tumbler)=>{
      setGropupLap(tumbler)
    }

    const HideAndBlock=(groupNumber)=>{
      if (!isHide.includes(groupNumber)){
          setIsHide([...isHide,(groupNumber)])
      }
      else {
          setIsHide(isHide.filter((i)=>i!==groupNumber))
      }
    }
    // Группируем пользователей
    const groupedUsers = groupUsersByGroup(users);
    
    return (
      <div className="users">
        {groupedUsers.map((group, index) => (
            <div className="group_list" key={index} style={{backgroundColor: colors[index % colors.length],border:colors[index % colors.length]}}>
                <div className="group_wrapper">
                    <div className="group_name" onClick={()=>HideAndBlock(index+1)}>
                        <p className="group_item">{index+1} Группа</p>
                        {(group.length>1)
                          ?<ArrowDropDownIcon/>
                          :<div/>
                        }
                    </div>
                    <button className="group_button" onClick={()=>setGropupLap(index+1)}><RestartAltIcon/></button>
                </div>
                {group.map((user, index) => (
                    <User props={props} user={user} reset={reset} key={index} groupLap = {[groupLap,allLap]} style={{display:(isHide.includes(user.group))||index===0 ?'block':'none'}}/>
                ))}
                
            </div>
        ))}
      </div>
    );
}

export default UserList;