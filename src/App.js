import '@csstools/normalize.css'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payment from './pages/Payment';
import Main from './pages/Main';
import Form from './pages/form/Form'
import ScrollToTop from './components/scrollToTop';

function App() {
  
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/payment' Component={Payment}/>
        <Route exact path='/' Component={Main}/>
        {/* <Route path='/form' Component={Form}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
