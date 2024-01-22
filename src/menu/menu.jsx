import React from 'react';
import './menu.css'



const Menu = ({items,active,setActive}) => {
    return (
        <div className='content-menu'>
            <ul className={active ? 'menu active':'menu'} onClick={e=>e.stopPropagation()}>
              {items.map(item=>
                  <li onClick={()=>setActive(false)}>
                      <a href={item.href}>{item.value}</a>
                  </li>
              )}
            </ul>
        </div>
    );
}

export default Menu;
