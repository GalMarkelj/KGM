import { useParams } from 'react-router-dom';

// data
import projects from '../data/projects.json'
const Project = () => {
  const { project } = useParams()

  return (
    <div>
      {
        projects.filter((desc) => desc.title === project)
          .map((desc) => (
            <div>
              <h2>{desc.title}</h2>
              <span>Neki Slider</span>
              {desc.elements.map((el) => (
                <div>
                  <h4>{el.title}</h4>
                  <p>{el.content}</p>
                </div>
              ))}
              {!!desc.list && (
                <div>
                  <h4>{desc.list.title}</h4>
                  {desc.list.list_items.map((list_item) => (
                    <ul>
                      <li>{list_item}</li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          ))
      }
    </div>
  )
}

export default Project


