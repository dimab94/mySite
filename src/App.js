import '@csstools/normalize.css'
import './styles/App.css'
import './fonts/Oswald/Oswald-Light.ttf'
import './fonts/VT323/VT323-Regular.ttf'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payment from './pages/Payment';
import Main from './pages/Main';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/payment' Component={Payment}/>
        <Route exact path='/' Component={Main}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
