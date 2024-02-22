import '@csstools/normalize.css'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payment from './pages/docs/Payment';
import Privacy from './pages/docs/Privacy';
import Main from './pages/Main';
import Form from './pages/form/Form'
import ScrollToTop from './components/scrollToTop';
import Offer from './pages/docs/Offer';
import Rules from './pages/docs/Rules';
import Refund from './pages/docs/Refund';
import Legal from './pages/legal/Legal';

function App() {
  
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
        {/* <Route path='/form' Component={Form}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
