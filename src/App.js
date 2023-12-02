import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar'
import { Flowbite } from 'flowbite-react';
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App bg-primary-600" >
      <Flowbite>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
      </Flowbite>
    </div>
  );
}

export default App;
