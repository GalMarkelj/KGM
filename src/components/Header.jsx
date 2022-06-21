import { Link } from "react-router-dom"

import logo from '../images/KGM_1_outline.svg'

const HeaderLink = ({url, label, icon, isExternal}) => (
  <li className="nav-list__item">       
    {isExternal ?
      <a href={url} className="nav-list__item--link f--xl">{label}</a> : 
      <Link to={url} className="nav-list__item--link f--xl">{label}</Link>}
    {!!icon && <span className={`${icon} c--sky m-left--xs f--xl`} />}
  </li>
)

const Header = ({links}) => {
  return (
    <header id="header">
      <nav className="nav flex flex--apart flex--middle">
        <Link to={'/'} className="nav__logo"><img src={logo} alt="KGM logo" /></Link>
        <ul className="list--inline f--secondary nav-list">
          { links.map((link, i) => <HeaderLink key={link.url} {...link} />) }
          <li className="nav-list__item">
            <span className="fa-solid fa-bars c--sky f--xxl" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
