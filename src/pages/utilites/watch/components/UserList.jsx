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

  //drag & drop below-----------------------------------------------

/*   function dragStartHandler(e,user){
    setCurrentUser(user)
  }
  function dragEndHandler(e){
  }
  function dragOverHandler(e){
      e.preventDefault()
  }
  function dropHandler(e,user){
      e.preventDefault()
      console.log(user)
      console.log("Состояние currentUser обновлено:", currentUser)
        const updatedUsers = mainArrUsers.map((u)=>{
          if (u.id == draggedUser.id){
              u.group = user.group
              console.log(updatedUsers)
          }
      })
  } */
    
  return (
    <div className="users">
      {groupedUsers.map((group, index) => (
          <div className="group_list" key={index} style={{backgroundColor: colors[index % colors.length],border:colors[index % colors.length]}}>
              <div className="group_wrapper">
                  <div className="group_name" onClick={()=>HideAndBlock(group[0].group)}>
                      <p className="group_item">{(group[0].group!=-1)?group[0].group:'--'} Группа</p>
                      {(group.length>1)
                        ?<ArrowDropDownIcon/>
                        :<div/>
                      }
                  </div>
                  <button className="group_button" onClick={()=>setGropupLap(group[0].group)}><RestartAltIcon/></button>
              </div>
              {group.map((user, index) => (
                  <User props={props} 

                  
/*                   onDragStart={(e)=>dragStartHandler(e,user)}
                  onDragLeave={(e)=>dragEndHandler(e)}
                  onDragEnd={(e)=>dragEndHandler(e)}
                  onDragOver={(e)=> dragOverHandler(e)}
                  onDrop={(e)=>dropHandler(e,user)} */

                  user={user} 
                  reset={reset} 
                  key={index} 
                  userArr={userArr} 
                  groupLap = {[groupLap,allLap]} style={{display:(isHide.includes(user.group))||index===0 ?'block':'none'}}
                  />
              ))}
              
          </div>
      ))}
    </div>
  );
}

export default UserList;