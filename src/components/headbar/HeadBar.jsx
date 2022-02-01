import "./headbar.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import Toggle from '../toggle/Toggle'

export default function HeadBar({menuOpen, setMenuOpen}) {
  return (
      <div className={"HeadBar " + ( menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
              <a href="#home" className="logo">gauss.</a>
              <div className="items">
                <PhoneIcon className="icon"/>
                <span>+225 077892704</span>
              </div>
              <div className="items">
                <MailIcon className="icon"/>
                <span>bidigafadel@gmail.com</span>
              </div>
              <div className="items">
                <InstagramIcon className="icon"/>
              </div>
              <div className="items">
            <TwitterIcon className="icon"/>
              </div>
          </div>
          <div className="rigth">
            <Toggle className='toggle'/>

            <div className="option" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
            </div>
          </div>
        </div>
          
      </div>
  )
}
