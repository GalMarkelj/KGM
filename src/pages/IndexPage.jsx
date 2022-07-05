import SiteTitle from '../components/SiteTitle'
import ObliqueCard from '../components/ObliqueCard'
import Banner from '../components/Banner'
import { InternalLinkButton } from '../components/Button'
import { Slider, Slide } from '../components/Slider'
import ObliqueCard from '../components/ObliqueCard'

// data
import projects from '../data/projects.json'

// images
import mainBackground from '../images/background/main-background.jpg'

const IndexPage = () => {
  const maxNumberOfProjects = 2
  return (
    <div>
      <div className="full--height">
        <img src={mainBackground} alt="Main background" className="main-background fixed--top width--100p height--100p" />
        <SiteTitle />
      </div>
      <h2 className="container h1 f--secondary p-side--s">Latest Projects</h2>
      <Slider className="slider--fade slider--mobile">
          {
            projects.map((_, i, arr) => i < maxNumberOfProjects && arr[i])
            .sort((cur, acc) =>  acc.date - cur.date)
            .map((project, i, arr) => {
              i % 2 === 0 ? arr[i].alignLeft = true : arr[i].alignLeft = false
              return <Slide><ObliqueCard {...project} /></Slide>
            })
          }
      </Slider>
      <div className="flex flex--center m-top--xl">
        <InternalLinkButton mods={['barbie']} to="/projects">All projects</InternalLinkButton>
      </div>
      <div className="m-top--xl">
        <Banner {...bannerItems} />
      </div>
    </div>
  )
}

export default IndexPage


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
