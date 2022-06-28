import SiteTitle from './SiteTitle'
import ObliqueCard from './ObliqueCard'
import Banner from './Banner'
import { InternalLinkButton } from './Button'
import { Slider, Slide } from './Slider'
import ObliqueCard from './ObliqueCard'

// images
import mainBackground from '../images/background/main-background.jpg'
import testImage from '../images/background/lambo.jpg'
import test from '../images/test.jpg'

const IndexPage = () => (
  <div>
    <div className="full--height">
      <img src={mainBackground} alt="Main background" className="main-background fixed--top width--100p height--100p" />
      <SiteTitle />
    </div>
    <h2 className="container h1 f--secondary p-side--s">Latest Projects</h2>
    <Slider className="slider--fade slider--mobile">
      {obliqueCardItems.map((item) => <Slide><ObliqueCard {...item} /></Slide>)}
    </Slider>
    <div className="flex flex--center m-top--xl">
      <InternalLinkButton mods={['barbie']} to="/projects">All projects</InternalLinkButton>
    </div>
    <div className="m-top--xl">
      <Banner {...bannerItems} />
    </div>
  </div>
)

export default IndexPage

const obliqueCardItems = [
  {
    date: '5.5.2022',
    title: 'Authentication-app',
    inProgress: true,
    description: `
      Purpose of this project was to learn how does the back-end work and besides, it was just as well a school project.
      As a user you can register, login and then insert your "personal" data and also update it if you like.
      My plan in the future is to continue further into the deep of the back-end.
      You can visit the project and set it up locally, by visiting my github repo below.
    `,
    list: 'Technologies used include:',
    listItems: ['NodeJs', 'Express', 'EJS', 'SQLite'],
    image: testImage,
    cardExternal: 'https://github.com/GalMarkelj/authentication-app',
    alignLeft: false
  },
  {
    date: '13.4.2022',
    title: 'Beauty - Glow',
    inProgress: false,
    description: `
      When my practical education started me and my colleague Luka Štiglic were given the assignment to build this project for a customer.
      This was our first legit project that we build.
    `,
    list: 'Technologies used include:',
    listItems: ['Wordpress', 'SCSS', 'PHP'],
    image: test,
    cardExternal: 'https://beautyglowinsideout.si',
    alignLeft: true
  },
  {
    date: '10.1.2022',
    title: 'Aplication form',
    inProgress: false,
    description: `
      The very first day of my practical education when I met my mentor, I was given an assignment form him to see where my knowledge about programming lies.
    `,
    list: 'Technologies used include:',
    listItems: ['HTML', 'CSS', 'JavaScript'],
    image: testImage,
    alignLeft: false
  }
]

const bannerItems = {
  title: 'Contact me',
  paragraph: `I'm always interested to learn new things and also mistakes I make.`,
  clickElement: {
    label: 'Email me',
    elementType: 'a',
    classes: 'f--l',
    url: 'mailto:galmarkelj09@gmail.com',
  }
}
