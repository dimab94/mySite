import React from 'react';
import { Link } from "react-router-dom"
import './menu.css'



const Menu = ({items,active,setActive}) => {
    return (
        <ul className={active ? 'menu active':'menu'} onClick={e=>e.stopPropagation()}>
          {items.map(item=>
                <li onClick={()=>setActive(false)} key={item.key}>
                    {item.value=='Payment'?
                    <Link to={`/${item.value}`}>{item.value}</Link>
                    :
                    <a href={item.href}>{item.value}</a>
                    }                  
                </li>
          )}
        </ul>
    );
}

export default Menu;
