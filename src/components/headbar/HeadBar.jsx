import "./headbar.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Toggle from '../toggle/Toggle'
import { useContext } from "react";
import { ThemeContext } from "../../context";

export default function HeadBar({menuOpen, setMenuOpen}) {
  const theme = useContext(ThemeContext)
  return (
      <div className={"HeadBar " + ( menuOpen && "active")} style={{backgroundColor: theme.state.darkMode ? "black" : "white", color: theme.state.darkMode ? "white" : "black"}}>
        <div className="wrapper">
          <div className="left">
              <a href="#home" className="logo">gauss.</a>
              <div className="items">
                <PhoneIcon className="icon"/>
                <span>+225 077892704</span>
              </div>
              <div className="items">
                <a href="mailto:bidigafadel@gmail.com">
                  <MailIcon className="icon"/>
                  <span>bidigafadel@gmail.com</span>
                </a>
              </div>
              <div className="items">
                <a href="http://www.instagram.com/young_ivorian">
                  <InstagramIcon className="icon"/>
                </a>
              </div>
              <div className="items">
                <TwitterIcon className="icon"/>
              </div>
              <div className="items">
                <LinkedInIcon className="icon"/>
              </div>
          </div>
          <div className="rigth">
            <Toggle className='toggle'/>

            <div className="option" onClick={() => setMenuOpen(!menuOpen)} >
              <span className="line1" style={{backgroundColor: theme.state.darkMode ? "white" : "black"}}></span>
              <span className="line2" style={{backgroundColor: theme.state.darkMode ? "white" : "black"}}></span>
            </div>
          </div>
        </div>
          
      </div>
  )
}
