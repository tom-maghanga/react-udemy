import Logo from "../assets/logo.png"

function Header() {
  return (
    <header>
        <img src={Logo}></img>
        <a href='/'>Home</a>
    </header>
  )
}

export default Header