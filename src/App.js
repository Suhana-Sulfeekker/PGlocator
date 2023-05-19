
import './App.css';
import Hero from './pages/home/hero';
import Login from './pages/login/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Hero />} />
         <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
