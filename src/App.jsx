import './App.scss';

import HeadBar from "./components/headbar/HeadBar"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Projects from "./components/projects/Projects"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="App">
      ggg
      <HeadBar/>
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
