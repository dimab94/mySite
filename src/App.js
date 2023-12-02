import Zebra from './svg/zebra'
import '@csstools/normalize.css'
import './styles/App.css'
import swimming from './pic/swimming.png'
import cycling from './pic/cycling.png'
import running from './pic/running.png'
import phoneTP from './pic/phioneTP@1x.png'
import macBook from './pic/macBook.png'
import phone from './pic/phone@1x.png'
import gym from './pic/gym.png'
import './fonts/Oswald/Oswald-Light.ttf'
import './fonts/VT323/VT323-Regular.ttf'

function App() {
  return (
    <div className="App">
      <div className='generall_page_wrapper'>
        <div className='main'>
          <h1 className='main_title'>Baruzdin.tri</h1>
          <ul className='main_menu'>
            <li><a>About</a></li>
            <li><a>Coach</a></li>
            <li><a>Program</a></li>
            <li><a>FAQ</a></li>
            <li><a>Payment</a></li>
            <li><a>Utility</a></li>
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
        <div className='about'>
          <div className='about_asside'>
            <div>About</div>
            <span></span>
          </div>
          <div className='about_question_one'>
            <h3>Что такое online план тренировок?</h3>
            <p>Это календарь с&nbsp;тренировками на&nbsp;каждый день. Календарь составляется в&nbsp;приложении Training Pekas. Приложение позволяет подробно анализировать результаты тренировок и&nbsp;соревнований, а&nbsp;так&nbsp;же интегрируется с&nbsp;популярными приложениями и&nbsp;устройствами.</p>
          </div>
          <div className='about_phones'>
            <img src={phone} alt="phone" />
            <img src={phoneTP} alt="phoneTP" />
          </div>
          <div className='about_macBook'>
            <img  src={macBook} alt="macBook"/>
          </div>
          <div className='about_question_two'>
            <h3>Бег, плавание, вело, а&nbsp;может триатлон?</h3>
            <ul>
              <li>Разнообразие тренировок и&nbsp;фокус на&nbsp;результате</li>
              <li>Современная online платформа</li>
              <li>Связь с&nbsp;тренером и&nbsp;корректировки online</li>
              <li>Подготовка к&nbsp;различным дисциплинам и&nbsp;дистанциям</li>
            </ul>
          </div>
          {<Zebra/>}
          <div className='about_question_three'>
            <h3>Ваш календарь уникален и&nbsp;учитывает:</h3>
            <ul>
              <li>Целевой старт</li>
              <li>Текущую форму</li>
              <li>Ограничения по&nbsp;времени</li>
              <li>Индивидуальные особенности</li>
              <li>Командировки, болезни</li>
            </ul>
          </div>
          <div className='about_question_four'>
            <h3>Что необходимо для занятий?</h3>
            <ul>
              <li>Спортивные часы с&nbsp;пульсометром</li>
              <li>Наличие абонемента в&nbsp;бассейн</li>
              <li>Велосипед, велосипедный станок</li>
            </ul>
          </div>
          <div className='about_question_five'>
            <h3>Какой минимальный начальный уровень?</h3>
            <ul>
              <li>Плавание&nbsp;&mdash; не&nbsp;более 23&nbsp;мин/1км</li>
              <li>Вело&nbsp;&mdash; базовые навыки езды 
                + езда в&nbsp;контактных педалях.</li>
              <li>Бег&nbsp;&mdash; не&nbsp;более 35&nbsp;мин/5км</li>
            </ul>
          </div>
          <div className='about_gym'>
            <div className='about_gym_background'>
{              <h4 className='about_gym_text'>План включает в&nbsp;себя не&nbsp;только тренировки по&nbsp;целевым видам, но&nbsp;и&nbsp;занятия в&nbsp;зале (ОФП, СФП), а&nbsp;так&nbsp;же упражнния направленные на&nbsp;улучшение координации, баланса, подвижности.</h4>
}            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
