import "./toggle.scss"

export default function Toggle() {
  return (
    <div className="Toggle">
         <img src='/assets/sun.png' alt="" className="t-icon" />
         <img src='/assets/moon.png' alt="" className="t-icon" />
         <div className="t-button"></div>
    </div>
  )
}
