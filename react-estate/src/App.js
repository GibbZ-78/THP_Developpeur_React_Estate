import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import PropertyShow from './components/PropertyShow/PropertyShow';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/property/:propId" element={<PropertyShow/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        {/*
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/logout" element={<LogOut/>} />
        <Route path="/addproperty" element={<NewProperty/>} />
        <Route path="/updateproperty/:propId" element={<UpdateProperty/>} />
        <Route path="/deleteproperty/:propId" element={<DeleteProperty/>} />
        <Route path="/buyproperty/:propId" element={<BuyProperty/>} />
        */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;