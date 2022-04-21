import "./portfolio.scss"
import { useContext, useState } from "react"
import { ThemeContext } from "../../context"
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

export default function Portfolio() {
  const theme = useContext(ThemeContext)

  const handleClick = ()=>{
      theme.dispatch({type: "TOGGLE"})
  }

  const [currentSlide, setCurrentSlide] = useState(1)

  const data = [
    {
      'id': 1,
      'title' : 'Machine Learnine: OCR',
      'desccription' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aspernatur. Voluptatum adipisci, repellat placeat eveniet incidunt delectus dolor deleniti iste esse in blanditiis magni corrupti saepe, aliquid voluptates! Reiciendis, cumque.',
      'technos': ['Python', 'Pandas', 'Pytorch'],
      'img': 'assets/code.png'
    },
    {
      'id': 2,
      'title' : 'Application de gestion',
      'desccription' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aspernatur. Voluptatum adipisci, repellat placeat eveniet incidunt delectus dolor deleniti iste esse in blanditiis magni corrupti saepe, aliquid voluptates! Reiciendis, cumque.',
      'technos': ['ReactJs', 'FastApi', 'Python', 'Javascript'],
      'img': 'assets/code.png'
    },
    {
      'id': 3,
      'title' : 'Application mobile',
      'desccription' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aspernatur. Voluptatum adipisci, repellat placeat eveniet incidunt delectus dolor deleniti iste esse in blanditiis magni corrupti saepe, aliquid voluptates! Reiciendis, cumque.',
      'img': 'assets/code.png',
      'technos': ['Python', 'Pandas', 'Pytorch']
    }
  ]
  const handle = (val) => {
     val === "left" ? setCurrentSlide(currentSlide > 1 ?  currentSlide-1 : data.length) : setCurrentSlide(currentSlide < data.length ? currentSlide + 1 : 1)
  }
  return (
      <div className="Portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
          {data.map(item => ( <div className="container">
            <div className="item" style={{backgroundColor: theme.state.darkMode ? "white" : "black", color: theme.state.darkMode ? "black" : "white"}}>
              <div className="left">
                <div className="imgcontainer">
                  <img src={item.img} alt="" srcset="" className="projet"/>
                </div>
              </div>
              <div className="right">
                <div className="title">
                  {item.title}
                </div>
                <div className="description">
                  {item.desccription}
                </div>
                <div className="technos">
                  <ul>
                    {item.technos.map( i => (<li>{i}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          </div>))}
        </div>
        <ArrowBackIos  className="arrow left" onClick={()=>handle("left")} /*style={{color: theme.state.darkMode ? "white" : "black"}}*//>        
        <ArrowForwardIos className="arrow right" onClick={()=>handle("right")} />        
      </div>
  )
}
