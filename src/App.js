import '@csstools/normalize.css'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payment from './pages/payment/Payment';
import Privacy from './pages/docs/Privacy';
import Main from './pages/Main';
import { useState } from 'react'
import ScrollToTop from './components/scrollToTop';
import Offer from './pages/docs/Offer';
import Rules from './pages/docs/Rules';
import Refund from './pages/docs/Refund';
import Legal from './pages/legal/Legal';
import Utilites from './pages/utilites/Utilites';

function App() {

  const el = {
    class: 'Triathlon',
    key: '1.0',
    card: [{
      title:'Basic',
      description:`Базовая программа персонального планирования\u00A0триатлону.`,
      price:'12 000₽',
      advantages:[`Тренировки\u00A0трем видам, ОФП, растяжка\u00A0др.`,`Первичная консультация`,`Еженедельное составление плана тренировок`,`Еженедельная проверка выпонения тренировок`,`Обратная связь\u00A0сообщениях (мессенджерах)`,`Планирование гонок`],
      path:'https://forms.yandex.ru/u/653f51375d2a064c3cdf0328/',
      key: '1.1'
      },
      {title:'Plus',
      description:`Улучшеная программа персонального планирования\u00A0триатлону.`,
      price:'15 000₽',
      advantages:[`Первичная консультация`,`Еженедельное составление плана тренировок`,`Проверка 1\u00A0раз в\u00A02\u00A0дня`,`Корректировки плана`,`Связь\u00A0удобном для тебя формате (звонки/сообщения)`,`Планирование гонок`,`Заморозка 1-3 недели`],
      path:'https://forms.yandex.ru/u/653f51375d2a064c3cdf0328/',
      key: '1.2'
    }]
}

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/legal' Component={Legal}/>
        <Route path='/rules' Component={Rules}/>
        <Route path='/refund' Component={Refund}/>
        <Route path='/payment' Component={Payment}/>
        <Route path='/offer' Component={Offer}/>
        <Route path='/privacy' Component={Privacy}/>
        <Route exact path='/' Component={Main}/>
        <Route path='/utilites' Component={Utilites}/>
        {/* <Route path='/form' Component={Form}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
