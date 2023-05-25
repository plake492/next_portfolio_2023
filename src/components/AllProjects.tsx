import useAnimation from '@components/hooks/useAnimation'
import { heroParticlConfig } from '@components/utils/particals/hero'
import * as React from 'react'
import Particles from './Particles'
import { allProjectsAnimtaion } from '@components/utils/animations/allProjectsAnimation'

export default function App() {
  const projects = [
    {
      id: React.useId(),
      title: 'Evermore',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam at aperiam pariatur sequi, ea sed eveniet.',
    },
    {
      id: React.useId(),
      title: 'CSS Utilities',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam at aperiam pariatur sequi, ea sed eveniet.',
    },
    {
      id: React.useId(),
      title: 'React Form Validation',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam at aperiam pariatur sequi, ea sed eveniet.',
    },
    {
      id: React.useId(),
      title: 'Evermore',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam at aperiam pariatur sequi, ea sed eveniet.',
    },
    {
      id: React.useId(),
      title: 'Evermore',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam at aperiam pariatur sequi, ea sed eveniet.',
    },
    {
      id: React.useId(),
      title: 'Evermore',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam at aperiam pariatur sequi, ea sed eveniet.',
    },
  ]

  const sectionRef = React.useRef(null)
  const theme = useAnimation<HTMLDivElement>(allProjectsAnimtaion, {
    sectionRef,
  })

  return (
    <section
      ref={sectionRef}
      className="py-xl position-relative flex-center border border-5 border-dark"
      style={{ minHeight: '100vh' }}
    >
      <div className="container position-relative z-2">
        <h4 className="mb-xl">Projects</h4>
        <div className="row g-sm" id="project-cards">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              className={`col-4 align-self-end p-lg bg-dark-10 border-rounded border border-dark border-1 shadow shadow-3`}
            >
              <p className="h5">{project.title}</p>
              <p className="text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Particles
        options={heroParticlConfig(theme)}
        className="position-absolute top-0 left-0 w-100 h-100 z-0"
      />
      <div
        className="w-vw-100 py-xs position-absolute bottom-0 left-0 scroll-progress-bar"
        style={{
          bottom: '-0.227rem',
          left: '-0.227rem',

          background: `linear-gradient(45deg, ${theme?.tertiary}, ${theme?.accent})`,
        }}
      ></div>
    </section>
  )
}
