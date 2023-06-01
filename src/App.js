
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import './App.css';
import {Routes,Route} from'react-router-dom';
import Specials from'./components/Specials';
import Chicago from'./components/Chicago';
import CustomersSay from'./components/CustomersSay';
import Booking from'./components/Booking';
import Login from'./components/Login';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/Specials' element={<Specials/>}/>
    <Route path='/CustomersSay' element={<CustomersSay/>}/>
    <Route path='/Chicago' element={<Chicago/>}/>
    <Route path='/Booking' element={<Booking/>}/>
    <Route path='/Login' element={<Login/>}/>
    </Routes>
    <Footer/>

 </>
  );
}

export default App;
