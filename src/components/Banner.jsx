import ClickElement from "./ClickElement"

const Banner = ({title, paragraph, clickElement}) => (
  <div className="banner t--center">
    <h3 className="h1 f--secondary">{title}</h3>
    <p className="f--l">{paragraph}</p>
    <ClickElement {...clickElement}/>
  </div>
)

export default Banner
