import Header from '../components/header/Header'
import { useState } from 'react'
import Footer from '../components/footer/Footer'
import MainContent from '../components/mainContent/MainContent'
import Payment from './payment/Payment'

function Main() {

    const [menuIsActive,setMenuIsActive] = useState(false)
    const [modalActive,setModalActive] = useState(false)

    const cards=[
      {
          class: 'Triathlon',
          key: '1.0',
          card: [{
            title:'Basic',
            description:`Базовая программа персонального планирования\u00A0триатлону.`,
            price:'10000',
            advantages:[`Тренировки\u00A0трем видам, ОФП, растяжка\u00A0др.`,`Первичная консультация`,`Еженедельное составление плана тренировок`,`Еженедельная проверка выпонения тренировок`,`Обратная связь\u00A0сообщениях (мессенджерах)`,`Планирование гонок`],
            path:'https://forms.yandex.ru/u/653f51375d2a064c3cdf0328/',
            key: '1.1'
            }/* ,
            {title:'Plus',
            description:`Улучшеная программа персонального планирования\u00A0триатлону.`,
            price:'13000',
            advantages:[`Первичная консультация`,`Еженедельное составление плана тренировок`,`Проверка 1\u00A0раз в\u00A02\u00A0дня`,`Корректировки плана`,`Связь\u00A0удобном для тебя формате (звонки/сообщения)`,`Планирование гонок`,`Заморозка 1-3 недели`],
            path:'https://forms.yandex.ru/u/653f51375d2a064c3cdf0328/',
            key: '1.2'
          } */]
      },
      {
          class: 'Multisport',
          key: '2.0',
          card: [{
            title:'Basic',
            description:'Подготовка по велосипеду\u00A0/ бегу.',
            price:'10000',
            advantages:['Тренировки по избранному виду, ОФП, растяжка и\u00A0др.','Первичная консультация','Еженедельное составление плана тренировок','Еженедельная проверка выпонения тренировок','Обратная связь\u00A0 в сообщениях (мессенджерах)','Планирование гонок'],
            path:'https://forms.yandex.ru/u/65aebf2d2530c278d9a62430/',
            key: '2.1'
          }]
      }
    ]

    const [cardsList,setCardsList] = useState(cards[1])

    const handleFilter =(cardClassArr)=> setCardsList(cardClassArr)

    const [refreshPage,setRefreshPage] = useState(false)
    return (
      <div className="App">
        <div className='generall_page_wrapper' onClick={()=>setMenuIsActive(false)}>
          <Header active={menuIsActive} setActive={setMenuIsActive} setRefreshPage={setRefreshPage}/>
          {refreshPage=='payment' ? <Payment props={cards}/> :<MainContent handleFilter={handleFilter} setModalActive={setModalActive} cards={cards} refreshPage={refreshPage} setRefreshPage={setRefreshPage} active={modalActive} filterCards={cardsList}/>}
          <Footer/>
        </div>
      </div>
    );
}
export default Main;