import { Link } from "react-router-dom"

const ObliqueCard = (project) => {
    const formatedDate = new Date(JSON.parse(project.date))
    const day = formatedDate.getDate()
    const month = formatedDate.toLocaleString('default', { month: 'long' })
    const year = formatedDate.getFullYear()

    return (
      <div
        className={`oblique-card p-side--s pos--rel container m-top--xxl 
        ${project.alignLeft ? 'oblique-card--reverse' : ' '}`}
        data-card-title={project.title}
      >
        <div className='oblique-card__content'>
          <span className='f--s'>{`${day}. ${month}, ${year}`}</span>
          <h3 className='c--sky m--reset f--secondary h2'>{project.title}</h3>
          {!!project.inProgress && <span className='f--xs'>~ In progress ~</span>}
          <p className='oblique-card__content-description f--l m-top--s'>{project.description}</p>
          <h4 className='m--reset'>Tools that I used :</h4>
          <ul className='list--inline flex flex--end p--reset m-top--xs'>
            {project.tools.map((tool) => <li className="oblique-card__list-item">{tool}</li>)}
          </ul>
          {!!project.projectURL && <span>For more info about this project click <Link to={`/projects/${project.title}`}>Here</Link></span>}
        </div>
        <img src={project.projectImage} alt='Card image' className='oblique-card__image p--m' />
      </div>
    )
  }

export default ObliqueCard
