import React from "react";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar';
import { Flowbite } from 'flowbite-react';
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/footer";
import Education from "./pages/education/education";
import Experience from "./pages/experience/experience";
import ScrollToTop from "react-scroll-to-top";
import Projects from "./pages/projects/projects";

function App() {
  return (
    <div className="App bg-primary-600" >
      <Flowbite>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
      </Flowbite>
    </div>
  );
}

export default App;
