import * as React from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import type {
  Engine,
  RecursivePartial,
  IOptions,
  Container,
} from 'tsparticles-engine'

interface ParticleComponentPropTypes {
  options: RecursivePartial<IOptions>
  className?: string | undefined
}

export default function ParticleComponent({
  options,
  className,
}: ParticleComponentPropTypes): JSX.Element {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = React.useCallback(
    async (container: Container | undefined) => {
      console.log(container)
    },
    []
  )

  return (
    <Particles
      className={className}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      width="100%"
      height="100%"
      options={options}
    />
  )
}
