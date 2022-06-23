
import { Link } from 'react-router-dom'

import logo from '../images/logo/KGM_1_outline.svg'

const headerLinks = [
  { url: '/projects', label: 'Projects' },
  { url: '/resume', label: 'Resume' },
  { url: 'https://github.com/GalMarkelj', label: 'Github', icon: 'fa-brands fa-github', isExtrnal: true }
]

const HeaderLink = ({ url, label, icon, isExternal }) => (
  <li className='nav-list__item'>
    {isExternal
      ? <a href={url} className='nav-list__item--link f--xl t--normal c--light'>{label}</a>
      : <Link to={url} className='nav-list__item--link f--xl t--normal c--light'>{label}</Link>}
    {!!icon && <span className={`${icon} c--sky m-left--xs f--xl`} />}
  </li>
)
const MainHeader = ({ links }) => (
  <header id='header' className='container m-top--s'>
    <div className='p-side--s'>
      <nav className='nav flex flex--apart flex--middle'>
        <Link to='/' className='nav__logo'><img src={logo} alt='KGM logo' /></Link>
        <ul className='list--inline f--secondary nav-list'>
          {links.map((link) => <HeaderLink key={link.url} {...link} />)}
          <li className='nav-list__item'>
            <span className='fa-solid fa-bars c--sky f--xxl' />
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
const SubHeader = ({ links }) => (
  <div id='sub-header' className='pos--abs width--100p height--100p'>
    <div className='p-side--s'>
      <nav className='nav m-top--s'>
        <div className='flex flex--apart flex--middle'>
          <Link to='/' className='nav__logo'><img src={logo} alt='KGM logo' /></Link>
          <span className='fa-solid fa-circle-xmark c--sky f--xxl' />
        </div>
        <div className='overflow-line m-top--s' />
        <ul className='nav-list f--secondary m-top--s'>
          {links.map((link) => <HeaderLink key={link.url} {...link} />)}
        </ul>
      </nav>

      <div className='flex flex--center'>
        <div className='t--center fixed--bottom m-bottom--s'>
          <h2 className='m-bottom--s f--secondary h3'>Klavdij - Gal Markelj &middot; Junior front-end developer</h2>
          <p className='f--s'>&copy; 2022 Klavdij - Gal Markelj. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
)
const Header = () => {
  return (
    <div>
      <MainHeader links={headerLinks} />
      <SubHeader links={headerLinks} />
    </div>
  )
}

export default Header
