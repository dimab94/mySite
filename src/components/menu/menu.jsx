import React from 'react';
import { Link } from "react-router-dom"
import './menu.css'



const Menu = ({items,active,setActive,setRefreshPage}) => {
    return (
        <ul className={active ? 'menu active':'menu'} onClick={e=>e.stopPropagation()}>
          {items.map(item=>
                <li onClick={()=>{setActive(false);setRefreshPage('тык')}} key={item.key}>{/* Нужно придумать как при нажатии только на паймент менять содержимое страницы */}
                    {item.value=='Payment'?
                    <a>{item.value}</a>
                    :
                    <a href={`#${item.key}`}>{item.value}</a>
                    }                  
                </li>
          )}
        </ul>
    );
}

export default Menu;
