import React from 'react';
import { useNavigate } from "react-router-dom"
import './menu.css'


const Menu = ({items,active,setActive,setRefreshPage}) => {
    
    return (
        <ul className={active ? 'menu active':'menu'} onClick={e=>e.stopPropagation()}>
          {items.map(item=>
                <li onClick={()=>{setActive(false);setRefreshPage(item.key)}} key={item.key}>
                    <a>{item.value}</a>             
                </li>
          )}
        </ul>
    );
}

export default Menu;
