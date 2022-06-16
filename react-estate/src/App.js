import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import PropertyShow from "./components/PropertyShow/PropertyShow";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Sign from "./components/Sign/Sign";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/property/:propId" element={<PropertyShow />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
