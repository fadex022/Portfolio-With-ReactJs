import "./testimonials.scss"
import { Twitter, Instagram, Facebook, LinkedIn } from "@material-ui/icons";
import { useContext, useState } from "react"
import { ThemeContext } from "../../context"


export default function Testimonials() {
  const theme = useContext(ThemeContext)

  const data = [
    {
      id: 1,
      name: 'Lecam Papa',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut, excepturi nemo odio perferendis sapiente vero.',
      job: 'Flutter Dev',
      twitter: 'link',
      facebook: 'link',
      instagram: 'link',
      linkedin: 'link',
      image: 'assets/man.png'
    },
    {
      id: 2,
      name: 'Kouame Auguinard',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut, excepturi nemo odio perferendis sapiente vero.',
      job: 'Fullstack and Devops',
      twitter: 'link',
      facebook: '',
      instagram: 'link',
      linkedin: 'link',
      image: 'assets/man.png'
    },
    {
      id: 1,
      name: 'Lecam Papa',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut, excepturi nemo odio perferendis sapiente vero.',
      job: 'Flutter Dev',
      twitter: 'link',
      facebook: 'link',
      instagram: 'link',
      linkedin: '',
      image: 'assets/man.png'
    }
  ]

  return (
      <div className="Testimonials" id="testimonials">
        <h1>Témoignages</h1>
        <div className="container">
          {data.map(item => (
          <div className="card">
            <div className="top">
              <img src="assets/man.png" alt="profile picture" className="user" />  
              <div className="social">
                {item.twitter ? <Twitter  className="item" style={{color: theme.state.darkMode ? "white" : "black"}}/> : null}
                {item.instagram ?<Instagram  className="item"  style={{color: theme.state.darkMode ? "white" : "black"}}/> : null}
                {item.facebook ?<Facebook  className="item"  style={{color: theme.state.darkMode ? "white" : "black"}}/> : null}
                {item.linkedin ?<LinkedIn  className="item"  style={{color: theme.state.darkMode ? "white" : "black"}}/> : null}
              </div>   
            </div>
            <div className="center">{item.message}</div>
            <div className="bottom">
              <h3>{item.name}</h3>
              <h4>{item.job}</h4>
            </div>
          </div>
          ))}
        </div>
      </div>
  )
}
