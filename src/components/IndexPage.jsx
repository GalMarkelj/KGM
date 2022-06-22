import Header from "./Header"
import SiteTitle from "./SiteTitle"

import mainBackground from '../images/background/main-background.jpg'

const IndexPage = () => (
  <div>
    <Header />
    <img src={mainBackground} alt="Main background" className="main-background fixed--top width--100p height--100p" />
    <SiteTitle />
  </div>
)

export default IndexPage