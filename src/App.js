import logo from './logo.svg';
import './App.css';
import Appbar from './components/header/Appbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import About from './components/aboutus/About';
import Services from './components/services/Services';
import ContactUs from './components/contactus/ContactUs';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import ForgotPassword from './components/forgotpassword/ForgotPassword';

function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
