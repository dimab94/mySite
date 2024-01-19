import Zebra from './svg/zebra'
import Telegram from './svg/telegram.svg'
import Strava from './svg/strava.svg'
import Vk from './svg/vk.svg'
import InstagramGrey from './svg/instagramGrey.svg'
import TelegramGrey from './svg/telegramGrey.svg'
import StravaGrey from './svg/stravaGrey.svg'
import Instagram from './svg/instagram.svg'
import Mail from './svg/mail.svg'
import Flag from './svg/flag.svg'
import '@csstools/normalize.css'
import './styles/App.css'
import phoneTP from './pic/phioneTP@1x.png'
import macBook from './pic/macBook.png'
import phone from './pic/phone@1x.png'
import background from './pic/coachBackground.png'
import './fonts/Oswald/Oswald-Light.ttf'
import './fonts/VT323/VT323-Regular.ttf'

const formTri = 'https://forms.yandex.ru/u/653f51375d2a064c3cdf0328/'

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
{/*             <li><a>FAQ</a></li> */}
            <li><a>Payment</a></li>
{/*             <li><a>Utility</a></li> */}
          </ul>
          <div className='main_menu_button'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='main_page'>
            <div className='main_page_pic'>
              <div className='swimming'/>
              <div className='cycling'/>
              <div className='running'/>
            </div>
            <div className='main_page_slogan'>
              <div className='main_page_slogan_wrapper'>
                <h2>План твоих достижений.</h2>
              </div>
            </div>
          </div>
          <button className='main_button'>Начать тренировки</button>
        </div>
        <div className='about section'>
          <div className='about_asside asside'>
            <span/>
              <div className='asside_text'>About</div>
            <span/>
          </div>
          <div className='about_question_one'>
            <div>
            <h3>Что такое online план тренировок?</h3>
            <p>Это календарь с&nbsp;тренировками на&nbsp;каждый день. Календарь составляется в&nbsp;приложении Training Pekas. Приложение позволяет подробно анализировать результаты тренировок и&nbsp;соревнований, а&nbsp;так&nbsp;же интегрируется с&nbsp;популярными приложениями и&nbsp;устройствами.</p>
            </div>
            {<Zebra/>}
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
              <h4 className='about_gym_text'>План включает в&nbsp;себя не&nbsp;только тренировки по&nbsp;целевым видам, но&nbsp;и&nbsp;занятия в&nbsp;зале (ОФП, СФП), а&nbsp;так&nbsp;же упражнния направленные на&nbsp;улучшение координации, баланса, подвижности.</h4>            </div>
          </div>
        </div>
        <div className='coach section'>
          <div className='coach_asside asside'>
            <span/>
              <div className='asside_text'>Coach</div>
            <span/>
          </div>
          <div className='coach_photo'>
            <img className='coach_photo_background' src={background}/>
            <div className='coach_photo_face'></div>
          </div>
          <h2>Меня зовут Дима Баруздин</h2>
          <article className='coach_first'>
          Высшее образование в&nbsp;сфере физической культуры и&nbsp;спорта, закончил бакалавриат и&nbsp;магистратуру НГУ им. Лесгафта. Занимаюсь тренерской деятельностью с&nbsp;2014&nbsp;года, начинал с&nbsp;обучения плаванию.</article>
          <article className='coach_second'>
          Работаю со&nbsp;спортсменами разных возрастов и&nbsp;уровней. Подготавливаю к&nbsp;стартам в&nbsp;тритлоне от&nbsp;самых коротких, до&nbsp;самых длинных дистанций, порой даже экстримальных&nbsp;&mdash; таких как триатлон Siberman.</article>
          <article className='coach_third'>С&nbsp;детства профессионально занимался плаванием, позже перешел в&nbsp;триатлон. До&nbsp;2014 года являлся профессиональным спртсменом, выступал за&nbsp;сборную России. Мастер спорта по&nbsp;тритлону.</article>
          <div className='coach_logo'>
            <h1 className='main_title coach_logo_title'>Baruzdin.tri</h1>
            <div className='social'>
              {/* < img src={Instagram} alt='logo'/> */}
              <a href='https://vk.com/baruzdin_tri'>< img src={Vk} alt='logo' width="40" height="40"/></a>
              <a href='https://t.me/dmitriibaruzdin'>< img src={Telegram} alt='logo' width="40" height="40"/></a>
              {/* < img src={Strava} alt='logo' width="25" height="25"/> */}
            </div>
          </div>
          <div className='coach_statistics'>
            <div className='exp'>
              <div className='coach_number'>9</div>
              <p>лет стажа</p>
            </div>
            <div className='finishers_middle'>
              <div className='coach_number'>22</div>
              <p>финишера 70.3</p>
            </div>
            <div className='finishers_long'>
              <div className='coach_number'>6</div>
              <p>финишеров IM</p>
          </div>
          </div>
        </div>
        <div className='programs section'>
          <div className='programs_asside asside'>
            <span/>
              <div className='asside_text'>Programs</div>
            <span/>
          </div>
          <div className='programs_description'>
            <h2>Годовое планирование, тестирование, гоночный план, аналитика стартов, консультации, советы, всё в&nbsp;одном.</h2>
          </div>
          <div className='programs_top'><Zebra/></div>
            <div className='programs_benefit_types'>
              <h2>Виды спорта</h2>
              <p>Подготовка к&nbsp;тритлону или к&nbsp;одному из&nbsp;видов в&nbsp;отдельности.</p>
            </div>
            <div className='programs_benefit_deadlines'>
              <h2>Сроки</h2>
                <p>Программы подготовки рассчитаны на&nbsp;срок от&nbsp;2х&nbsp;месяцев, до&nbsp;2х&nbsp;лет.</p>
            </div>
            <div className='programs_benefit_goals'>
              <h2>Цели</h2>
                <p>На&nbsp;каждой из&nbsp;программ подготовлю вас к&nbsp;1-2 основным стартам.Помогу с&nbsp;выбором основного старта.</p>
          </div>
          <div className='card_wrapper card_triathlon'>
            <div className='programs_triathlon card'>
              <h4>Triathlon</h4>
              <p>Комплексная подготовка по&nbsp;всем трем видам.</p>
              <h5>12 000₽</h5>
              <button onClick={()=>window.location.href = formTri}>
                Заполнить анкету
              </button>
            </div>
          </div>
          <div className='card_wrapper card_run'>
            <div className='programs_run card'>
              <h4>Multisport</h4>
              <p>Подготовка по плаванию&nbsp;/ велосипеду&nbsp;/ бегу.</p>
              <h5>10 000₽</h5>
              <button onClick={()=>window.location.href = formTri}>
                Заполнить анкету
              </button>
            </div>
          </div>
          <div className='programs_bottom'><Zebra/></div>
          <div className='programs_feedback'>
            <p>После заполнения анкеты необходимо дождаться обратной связи.</p>
          </div>
        </div>
        <div className='footer'>
          <div className='footer_block section'>
            <div className='footer_social'>
              <h1 className='footer_title'>Baruzdin.tri</h1>
              <div className='footer_contact'>
                <a href='https://vk.com/baruzdin_tri'>Vk</a>
                <a href='https://t.me/dmitriibaruzdin'>Telegram</a>
                <a href='https://www.instagram.com/baruzdin.tri?igsh=djFtajhyZzk3ZHJs&utm_source=qr'>Instagram</a>
                <a href='https://www.strava.com/athletes/dbaruzdin'>Strava</a>
                <div className='footer_contact_mail'>
                  <img src={Mail} alt='mail'/>
                  <a href="mailto:tri@baruzdin.online&body=Привет, у меня остались вопросы">tri@baruzdin.online</a>
                </div>
              </div>
            </div>
            <div className='footer_location'>
              <div className='footer_location_wrapper-city'>
                <img src={Flag} alt='ru'/>
                <div className='footer_location_city'>Saint-Petersburg</div>
              </div>
              <div className='footer_location_date'>2024</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
