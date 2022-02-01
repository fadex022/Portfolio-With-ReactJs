import './App.scss';

import HeadBar from "./components/headbar/HeadBar"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Projects from "./components/projects/Projects"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  return (
    <div className="App">
      <HeadBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="container">
        <Home/>
        <Portfolio/>
        <Projects/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
