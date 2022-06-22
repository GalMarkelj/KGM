import Header from "./Header"
import SiteTitle from "./SiteTitle"
import ObliqueCard from "./ObliqueCard"

import mainBackground from '../images/background/main-background.jpg'

const IndexPage = () => (
  <div>
    <div className="full--height">
      <Header />
      <img src={mainBackground} alt="Main background" className="main-background fixed--top width--100p height--100p" />
      <SiteTitle />
    </div>
    <ObliqueCard />
  </div>
)

export default IndexPage
