import User from "./User";
import '../styles/stopWatch.css'
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function UserList({props, userArr,reset}) {

  const [groupLap,setGropupLap]=useState(false)
  const [isHide, setIsHide]=useState([])
  const [users,refreshArr] = userArr
  //const [users, setUsers] = useState(users)
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
  //const groupedUsers = useMemo(() => groupUsersByGroup(), [users]);

  //drag & drop below-----------------------------------------------

  const onDragEnd = (result) => {
    const { source, destination } = result;
  
    // Если нет места назначения, выходим
    if (!destination) return;
  
    // Находим группы
    const sourceGroupIndex = groupedUsers.findIndex((group) => String(group.id) === source.droppableId);
    const destinationGroupIndex = groupedUsers.findIndex((group) => String(group.id) === destination.droppableId);
  
    // Если группы не найдены, ничего не делаем
    if (sourceGroupIndex === -1 || destinationGroupIndex === -1) return;
  
    const sourceGroup = groupedUsers[sourceGroupIndex];
    const destinationGroup = groupedUsers[destinationGroupIndex];
  
    // Перетаскивание внутри одной группы
    if (source.droppableId === destination.droppableId) {
      const updatedUsers = Array.from(sourceGroup.arr);
      const [movedUser] = updatedUsers.splice(source.index, 1);
      updatedUsers.splice(destination.index, 0, movedUser);
      sourceGroup.arr = updatedUsers;
    } else {
      // Перетаскивание между группами
      const sourceUsers = Array.from(sourceGroup.arr);
      const destinationUsers = Array.from(destinationGroup.arr);
    
      const [movedUser] = sourceUsers.splice(source.index, 1);
      movedUser.group = Number(destination.droppableId); // Обновляем группу пользователя
      destinationUsers.splice(destination.index, 0, movedUser);
    
      sourceGroup.arr = sourceUsers;
      destinationGroup.arr = destinationUsers;
    }
  
    // Обновляем исходный массив
    refreshArr(groupedUsers.flatMap((group) => group.arr))
    //users = groupedUsers.flatMap((group) => group.arr);
  };
  
    
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="users">
        {groupedUsers.map((group, index) => (
           <Droppable key={group.id} droppableId={String(group.id)}>
              {(provided) => (
                <div className="group_list" {...provided.droppableProps} ref={provided.innerRef} key={group.id} style={{backgroundColor: colors[index % colors.length],border:colors[index % colors.length]}}>
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
                        <Draggable key={user.id} draggableId={user.id.toString()} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                display: isHide.includes(user.group) || index === 0 ? 'block' : 'none',
                              }}>
                                <User props={props} 
                                user={user} 
                                reset={reset} 
                                key={user.id}  
                                groupLap = {[groupLap,allLap]} 
                                />
                            </div>
                          )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
              )}
            </Droppable>  
        ))}
      </div>
    </DragDropContext>
  );
}

export default UserList;
