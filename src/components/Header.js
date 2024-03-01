import LOGO from "../assets/logo192.png"
import "../App.css";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img src={LOGO} alt="" />
      <a href="/">Home</a>
    </header>
  )
}