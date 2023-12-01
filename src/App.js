import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



