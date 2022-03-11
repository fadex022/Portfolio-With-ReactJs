import './App.scss';

import HeadBar from "./components/headbar/HeadBar"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/Skills"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import { useContext, useState } from 'react';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode ? "white" : "black"}}>
      <HeadBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home/>
        <Skills/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
