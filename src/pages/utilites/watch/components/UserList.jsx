import User from "./User";
import '../styles/stopWatch.css'

function UserList({props, users,reset}) {

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
    
    // Группируем пользователей
    const groupedUsers = groupUsersByGroup(users);
    console.log(groupedUsers)
  
    return (
      <div className="users">
        {groupedUsers.map((group, index) => (
            <div className="group_list" key={index} style={{backgroundColor: colors[index % colors.length],border:colors[index % colors.length]}}>
                <p className="group_item">{group[0].group} Группа</p>
                {group.map((user, index) => (
                    <User props={props} user={user} reset={reset} key={index}/>
                ))}
            </div>
        ))}
      </div>
    );
}

export default UserList;