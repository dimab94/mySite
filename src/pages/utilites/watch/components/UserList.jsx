import User from "./User";
import '../styles/stopWatch.css'
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function UserList({props, userArr,reset}) {

  const [groupLap,setGropupLap]=useState(false)
  const [isHide, setIsHide]=useState([])
/*   const [currentUser, setCurrentUser] = useState(null) */
  const users = userArr[0]

  const colors = ['#213723','rgb(88 40 40)','rgb(124 102 19)','rgb(82 22 72)','rgb(22 82 77)','rgb(67 33 104)']

  const groupUsersByGroup = () => {
    return Object.values(
      users.reduce((acc, user) => {
        // Если группы еще нет в аккумуляторе, добавляем её как пустой массив
        if (!acc[user.group]) {
          acc[user.group] = {id:user.group,arr:[]};
        }
        // Добавляем пользователя в соответствующую группу
        acc[user.group].arr.push(user);
        return acc;
      }, {})
    );
  };

  const allLap = (tumbler)=>{
    setGropupLap(tumbler)
  }

  const HideBlock=(groupNumber)=>{
    if (!isHide.includes(groupNumber)){
        setIsHide([...isHide,(groupNumber)])
    }
    else {
        setIsHide(isHide.filter((i)=>i!==groupNumber))
    }
  }
  // Группируем пользователей
  const groupedUsers = groupUsersByGroup(users);

  //drag & drop below-----------------------------------------------
    
  return (
    <div className="users">
      {groupedUsers.map((group, index) => (
          <div className="group_list" key={group.id} style={{backgroundColor: colors[index % colors.length],border:colors[index % colors.length]}}>
              <div className="group_wrapper">
                  <div className="group_name" onClick={()=>HideBlock(group.id)}>
                      <p className="group_item">{(group.id!==-1)?group.id:'--'} Группа</p>
                      {(group.arr.length>1)
                        ?<ArrowDropDownIcon/>
                        :<div/>
                      }
                  </div>
                  <button className="group_button" onClick={()=>setGropupLap(group.id)}><RestartAltIcon/></button>
              </div>
              {group.arr.map((user,index) => (
                  <User props={props} 
                  user={user} 
                  reset={reset} 
                  key={user.id} 
                  userArr={userArr} 
                  groupLap = {[groupLap,allLap]} 
                  style={{display:(isHide.includes(user.group))||index===0 ?'block':'none'}}
                  />
              ))}
              
          </div>
      ))}
    </div>
  );
}

export default UserList;
