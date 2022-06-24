import { Button } from "./Button"

const Banner = ({title, paragraph, clickElement}) => (
  <div className="banner t--center">
    <h3 className="h1 f--secondary">{title}</h3>
    <p className="f--l">{paragraph}</p>
    <Button mods={['barbie-dark']} className="f--m">Email me</Button>
  </div>
)

export default Banner
