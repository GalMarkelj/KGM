import { useParams } from 'react-router-dom'

// components
import { Dropdown, DropdownTrigger, DropdownContent } from '../components/Dropdown'
import { Slider, Slide } from '../components/Slider'

// data
import projects from '../data/projects.json'

// images
import titleImage from '../images/vectors/man-works-remotely/SVG/man-works-remotely.svg'

import modelIcon from '../images/SVG/model.svg'
import modelImage from '../images/SVG/modelImage.svg'
// import viewIcon from '../images/SVG/view.svg'
import viewImage from '../images/SVG/viewImage.svg'
import eyeIcon from '../images/SVG/eye.svg'
import controllerIcon from '../images/SVG/controller.svg'
import controllerImage from '../images/SVG/controllerImage.svg'

//testing images
import testImage1 from '../images/testImage1.jpg'
import testImage2 from '../images/testImage2.jpg'
import testImage3 from '../images/testImage3.jpg'

const Project = () => {
  const { projectID } = useParams()
  const numOfListItems = projects.filter((project) => project.title === projectID)[0].list.list_items.length

  const standardDropdowns = [
    { title: 'model', icon: modelIcon, image: modelImage },
    { title: 'view', icon: eyeIcon, image: viewImage },
    { title: 'controller', icon: controllerIcon, image: controllerImage }
  ]

  return (
    <div id='project'>
      {(projects.filter((project) => project.title === projectID)
        .map((project) => (
          <div className='container p-side--s' key={project}>
            <div className='flex flex--spread flex--middle'>
              <div className='flex flex--vertical flex--center'>
                <h1>{project.title}</h1>
                <p className='t-max--40'>{project.description}</p>
              </div>
              <img src={titleImage} alt='Title image' style={{ maxWidth: '600px' }} />
            </div>
            <div className='overflow-line m-top--l m-bottom--l' />
            {/* Later make validation if slider images exist and link those images */}
            <div className='flex flex--center m-bottom--m'>
              <div className='slider-wrapper'>
                <Slider mods={['slide']}>
                  <Slide><img src={testImage1} className='slider__content-image' /></Slide>
                  <Slide><img src={testImage2} className='slider__content-image' /></Slide>
                  <Slide><img src={testImage3} className='slider__content-image' /></Slide>
                </Slider>
              </div>
            </div>
            {standardDropdowns.map((dropdown) => {
              if (!project.hasOwnProperty(dropdown.title)) return
              const includedDropdown = () => {
                switch (dropdown.title) {
                  case 'model':
                    return project.model
                  case 'view':
                    return project.view
                  case 'controller':
                    return project.controller
                  default:
                    break
                }
              }
              return (
                <Dropdown key={dropdown.title}>
                  <DropdownTrigger>
                    <div className='flex flex--apart flex--middle p-side--s container pointer-none trigger'>
                      <div className='flex flex--middle trigger__title'>
                        <img src={dropdown.icon} alt={dropdown.title} />
                        <h2 className='t--capitalize f--secondary f--xl m--reset'>{dropdown.title}</h2>
                      </div>
                      <span className='fa-solid fa-plus' />
                    </div>
                  </DropdownTrigger>
                  <DropdownContent>
                    <div className='flex flex--spread flex--middle m-top--s'>
                      <div>
                        {includedDropdown().length !== 0 && (
                          includedDropdown().map((item, idx) => (
                            <div className='dropdown__content-item' key={`${dropdown.title}-${idx}`}>
                              <h3>{item.title}</h3>
                              <p>{item.content}</p>
                            </div>
                          ))
                        )}
                      </div>
                      <img src={dropdown.image} className='dropdown__content-image' />
                    </div>
                  </DropdownContent>
                </Dropdown>
              )
            })}
            {project.extraItems.map((item, idx) => (
              <div className='dropdown__content-item' key={idx}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
            {project.list && (
              <>
                <h3>{project.list.title}</h3>
                <div className='flex flex--apart flex--start'>
                  <ul className='project__list'>
                    {project.list.list_items.map((listItem, idx) =>
                      idx < (numOfListItems / 2) && <li className='project__list-item'>{listItem}</li>
                    )}
                  </ul>
                  <ul className='project__list m-left--s'>
                    {project.list.list_items.map((listItem, idx) =>
                      idx >= (numOfListItems / 2) && <li className='project__list-item'>{listItem}</li>
                    )}
                  </ul>
                </div>
              </>
            )}
            <div className='overflow-line m-top--l' />
          </div>
        ))
      )}
    </div>
  )
}

export default Project
