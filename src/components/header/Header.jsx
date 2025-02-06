import './header.css'
import Menu from '../menu/menu';
import { useNavigate,useLocation } from "react-router-dom"
import { useState } from 'react';

function Header ({active,setActive,setRefreshPage}) {
    const navigate = useNavigate()
    const location = useLocation()

    const items = [{value:'About',key:'about'},{value:'Coach',key:'coach'},{value:'Programs',key:'programs'},{value:'Payment',key:'payment'}]

    return ( 
        <nav className={location.pathname==='/'?'main-wrapper':'wrapper'} style={{display:location.pathname=='/utilites'?'none':'block'}}>
            <h1 className='title'>Baruzdin-tri</h1>
            {(location.pathname==='/'||location.pathname==='/payment') ?
            <div className='header-menu'>
                <div className={active ? 'burger close' : 'burger'} onClick={(e)=>{e.stopPropagation(); setActive(!active)}}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <Menu active={active} setActive={setActive} items={items} setRefreshPage={setRefreshPage}/>
            </div>
            :
            <div className='header-back'>
                <button style={{display:location.pathname=='/legal'?'none':'block'}} onClick={() => navigate(-1)}>back</button>
                <button onClick={() => navigate('/')}>home</button>
            </div>
            }
        </nav>
    );
}

export default Header;