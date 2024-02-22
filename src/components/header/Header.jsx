import './header.css'
import Menu from '../menu/menu';
import { useNavigate } from "react-router-dom"

function Header ({active,setActive, items}) {
    const navigate = useNavigate()
    return ( 
        <nav className='wrapper'>
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
                <button onClick={() => navigate(-1)}>go back</button>
            </div>
            }
        </nav>
    );
}

export default Header;