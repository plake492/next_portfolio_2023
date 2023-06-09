import { IOptions, RecursivePartial } from 'tsparticles-engine'

export const heroParticlConfig = (colorTheme: {
  [key: string]: string | number
}): RecursivePartial<IOptions> => ({
  fpsLimit: 120,
  interactivity: {
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  pauseOnOutsideViewport: true,
  particles: {
    color: {
      value: colorTheme?.tertiary as string,
    },
    links: {
      color: colorTheme?.tertiary,
      distance: 120,
      enable: true,
      opacity: 0.6,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'bottomRight',
      enable: true,
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
  fullScreen: { enable: false },
})
