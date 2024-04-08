import Logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
        <img src={Logo}></img>
        <a href='/'>Home</a>
    </header>
  )
}

export default Header