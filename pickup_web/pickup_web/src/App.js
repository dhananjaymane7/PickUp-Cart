import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './component/Home/Main';
import Location from './component/Other/Location';
import Parsal from './component/Other/Parsal';
import Report from './component/Other/Report';
import Schedule from './component/Other/Schedule';
import Services from './component/Services';
import About from './component/About';
import Contact from './component/Contact';
import Pickup from './component/Other/Pickup';
import Delivery from './component/Other/Delivery';
import Nav from './component/Nav';
import Footer from './component/Footer';
import Forms from './component/Forms/Forms';
import Package from './component/Forms/Package';
import Schedule01 from './component/Forms/Schedule01';
import Summary from './component/Forms/Summary';
import QuickForm from './component/QuickOrders/QuickForm';
import BookNow from './component/Home/component/BookNow';


import HorizontalLinearStepper from './component/Forms/SubNav';
import FormPage from './component/Home/component/FormPage';
import CargoOrdersummery from './component/Home/component/CargoOrdersummery';
import DocumentFormpage from './component/Home/component/DocumentFormpage';
import RestractedItem from './component/RestractedItem';

function App() {
 
  return (

    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Pickup" element={<Pickup />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/Parsal" element={<Parsal />} />
        {/* <Route path="/Schedule" element={<Schedule />} /> */}
        <Route path="/Report" element={<Report />} />
        <Route path="/Restricted-Item" element={<RestractedItem />} />
        


        {/* trial */}
    
        <Route path='/stepper' element={<HorizontalLinearStepper/>}/>
    
        <Route path='/forms' element={<Forms/>}/>
        <Route path='/DocumentForm' element={<DocumentFormpage/>}/>
        <Route path='/BookNow' element={<BookNow/>}/>
        <Route path='/package' element={<Package/>}/>
        <Route path='/schedule' element={<Schedule01/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/quick' element={<QuickForm/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/cargo-order' element={<CargoOrdersummery/>}/>
        {/* trial */}

      </Routes>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
