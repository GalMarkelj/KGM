import { useState, useEffect } from 'react'

import { ExternalLinkButton } from '../components/Button'
import ObliqueCard from '../components/ObliqueCard'
import { Button } from '../components/Button'

import titleImage from '../images/vectors/programming-ilustration/SVG/programming-ilustration.svg'
import testImage from '../images/background/lambo.jpg'
import test from '../images/test.jpg'

const ProjectsPage = () => {

  const [isLatest, setIsLatest] = useState(true)
  const [showAll, setShowAll] = useState(false)

  return (
    <div id="projects-page" className="container">
      <div className="page-title m-top--xl p-side--s">
        <img src={titleImage} className="page-title__image"/>
        <h2 className="f--xxl m-left--m">Beggining of my development journey</h2>
        <p>
          <span className="f--xl">🏫</span>
          In primary school I was all about gaming, that's way I enrolled in computer high school. First 3 years I was an electrician beacuse I didn't have enough points to enter a computer program. In primary school I was very lazy when it comes to studying, I was always out playing or doing some 'silly' things. Everything started when I finished 3th year and switched the program and become a computer guy. The school wasn't the best soo I started to work all days and I was barely in school, but when I was, I was sleeping. Because of that I fell all my exams about programming. I also took some instructions, I was also thinking to change school. But then my family said 'once you start running away from your challenges, you will never stop', then I started to study. My will for programming started to grow and I graduated from my program and become a computer technician.
        </p>
        <p>
          <span className="f--xl">🎓</span>
          After that I enrolled into higher school of informatics, only enrolled, I was still working as an electrician because I thought 'who would want to take some kid for development with zero experience'. This school had condition to complete practical education. To find a good company to take me in I stated to study and making my first project to show some will and where my knowledge lies. That was my first upload on github,
        </p>
        <div>
          <ExternalLinkButton mods={['barbie']} href="#kgm-parts" className={['d--inline-block']}>KGM-Parts</ExternalLinkButton>
        </div>
        <p className="m-top--m">
          <span className="f--xl">🏢</span>
          I found a company who were willing to take me in for my practical education and said, if I work hard and study enough they will employ me. Here I am now, creating this website as a project to learn React and to tell my story how my journey started.
        </p>
      </div>
      
      <div className="t--center m-top--l">
        <span className="h1 t-underline--sky-c">All my projects are listed below ↓</span>
      </div>

      <div className="overflow-line m-top--m" />

      <div className="projects pos--rel">
        <div className="t--center m-top--xl">
          <Button
            mods={['barbie']}
            className={['f--l']}
            onClick={() => isLatest ? setIsLatest(false) : setIsLatest(true)}
          >
            Latest
            {isLatest ? '↓' : '↑'}
          </Button>
        </div>
        <div className="timeline" />
        {
          projects.sort(
            (cur, acc) => isLatest  ? acc.date - cur.date : cur.date - acc.date )
            .map((project, i) => {
              if (!showAll) {
                if (i < 3) return <ObliqueCard {...project} />
              } else {
                return <ObliqueCard {...project} />
              }
            })
        }
        <Button
          mods={['barbie']}
          className={['f--l']}
          onClick={() => showAll ? setShowAll(false) : setShowAll(true)}
        >{showAll ? 'Hide' : 'Load all'}</Button>
      </div>

    </div>
  )
}

export default ProjectsPage

const projects = [
  {
    date: new Date('2022-01-10'),
    title: 'Aplication form',
    inProgress: false,
    description: `
      The very first day of my practical education when I met my mentor, I was given an assignment form him to see where my knowledge about programming lies.
    `,
    list: 'Technologies used include:',
    listItems: ['HTML', 'CSS', 'JavaScript'],
    image: testImage,
    alignLeft: false
  },
  {
    date: new Date('2022-05-05'),
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
    alignLeft: true
  },
  {
    date: new Date('2022-04-13'),
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
    alignLeft: false
  },
  {
    date: new Date('2022-04-13'),
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
    date: new Date('2022-04-13'),
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
    alignLeft: false
  }
]

import '../helpers/timeline'
