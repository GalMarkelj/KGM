import { Link } from "react-router-dom"

const FooterLink = ({ url, label, icon, isExternal }) => (
  <li className='nav-list__item'>
    {isExternal
      ? <a href={url} className='nav-list__item--link f--xl t--normal c--light' target="_blank">
          {label}
          {!!icon && <span className={`${icon} c--barbie f--xxl`} />}
        </a>
      : <Link to={url} className='nav-list__item--link f--xl t--normal c--light'>
          {label}
          {!!icon && <span className={`${icon} c--barbie f--xxl`} />}
        </Link>}
  </li>
)

const Footer = () => (
  <footer id="footer" className="t--center">
    <h2 className="h1">Klavdij - Gal Markelj</h2>
    <nav>
      <ul className="list--inline p--reset">
        {footerLinks.map((link) => <FooterLink key={link.url} {...link} />)}
      </ul>
    </nav>
    <p className="f--s m-top--s">&copy; 2022 Klavdij - Gal Markelj. All rights reserved.</p>
  </footer>
)

export default Footer

const footerLinks = [
  { url: 'https://www.instagram.com/gal_markelj', icon: 'fa-brands fa-instagram', isExternal: true },
  { url: 'https://discord.com/users/247079542399827968', icon: 'fa-brands fa-discord', isExternal: true },
  { url: 'https://github.com/GalMarkelj', icon: 'fab fa-github-square', isExternal: true },
  { url: 'mailto:galmarkelj@envoo.net', icon: 'fas fa-envelope', isExternal: true }
]
