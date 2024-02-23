import './header.css'
import Menu from '../menu/menu';
import { useNavigate,useLocation } from "react-router-dom"

function Header ({active,setActive, items}) {
    const navigate = useNavigate()
    const location = useLocation()
    return ( 
        <nav className={location.pathname==='/'?'main-wrapper':'wrapper'}>
            <h1 className='title'>Baruzdin.tri</h1>
            {items ? 
            <div className='header-menu'>
                <div className={active ? 'burger close' : 'burger'} onClick={(e)=>{e.stopPropagation(); setActive(!active)}}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <Menu active={active} setActive={setActive} items={items}/>
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