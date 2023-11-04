import './styles/build/App.css';
import Zebra from './svg/zebra';

function App() {
  return (
    <div className="App">
      <div className='generall_page_wrapper'>
        <div className='main>'>
          <div className='main_title'>
            <h1>Baruzdin.tri</h1>
          </div>
          <div className='main_menu'>
            <h3>About</h3>
            <h3>Coach</h3>
            <h3>Program</h3>
            <h3>FAQ</h3>
            <h3>Payment</h3>
            <h3>Utility</h3>
          </div>
          <div className='main_pic'>
            <div>pic1</div>
            <Zebra/>
            <div>pic2</div>
            <div>pic3</div>
          </div>
          <div className='main_slogan'>
            <h2>План твоих достижений.</h2>
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
