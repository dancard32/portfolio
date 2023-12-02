import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

function App() {
  return (
    <Flowbite>
    <BrowserRouter>
      <div className="App bg-primary-600" >
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <DarkThemeToggle />
    </BrowserRouter>
    </Flowbite>
  );
}

export default App;
