import './header.css'
import Menu from '../menu/menu';

function Header ({active,setActive, items}) {
    return ( 
        <nav className='wrapper-menu'>
            <h1 className='title'>Baruzdin.tri</h1>
            <div className={active ? 'burger close' : 'burger'} onClick={(e)=>{e.stopPropagation(); setActive(!active)}}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Menu active={active} setActive={setActive} items={items}/>
        </nav>
    );
}

export default Header;