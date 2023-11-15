import Zebra from './svg/zebra';
import '@csstools/normalize.css'
import './styles/App.css'
import swimming from './pic/swimming.png'
import cycling from './pic/cycling.png'
import running from './pic/running.png'
import './fonts/Oswald/Oswald-Light.ttf'
import './fonts/VT323/VT323-Regular.ttf'

function App() {
  return (
    <div className="App">
      <div className='generall_page_wrapper'>
        <div className='main'>
          <h1 className='main_title'>Baruzdin.tri</h1>
          <ul className='main_menu'>
            <li>About</li>
            <li>Coach</li>
            <li>Program</li>
            <li>FAQ</li>
            <li>Payment</li>
            <li>Utility</li>
          </ul>
          <div className='main_menu_button'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='main_page'>
            <div className='main_page_pic'>
              <img src={swimming} className='swimming' alt='swimming'/>
              <img src={cycling} className='cycling' alt='cycling'/>
              <img src={running} className='running' alt='running'/>
            </div>
            <div className='main_page_slogan'>
              <div className='main_page_slogan_wrapper'>
                <h2>План твоих достижений.</h2>
              </div>
            </div>
          </div>
          <button className='main_button'>Начать тренировки</button>
        </div>
      </div>
    </div>
  );
}

export default App;
