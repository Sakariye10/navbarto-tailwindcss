import React from 'react';
import { BrowserRouter as  Router ,Routes ,Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/hero/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Service from './pages/Service';


const App = () => {
  return (
    <Router>
      <Header />
      

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/service"} element={<Service />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;