import './styles/App.css';
import Zebra from './svg/zebra';
import swimming from './pic/swimming.png'
import cycling from './pic/cycling.png'
import running from './pic/running.png'

function App() {
  return (
    <div className="App">
      <div className='generall_page_wrapper'>
        <div className='main'>
          <div className='main_title'>
            <h1>Baruzdin.tri</h1>
          </div>
          <ul className='main_menu'>
            <li>About</li>
            <li>Coach</li>
            <li>Program</li>
            <li>FAQ</li>
            <li>Payment</li>
            <li>Utility</li>
          </ul>
          <div className='main_page'>
            <div className='main_page_pic'>
              <img src={swimming} alt='swimming'/>
              <img src={cycling} className='style__shadow' alt='cycling'/>
              <img src={running} alt='running'/>
            </div>
            <div className='main_page_slogan'>
              <h2>План твоих достижений.</h2>
            </div>
          </div>
          <div>
            <button className='main_button'>Начать тренировки</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
