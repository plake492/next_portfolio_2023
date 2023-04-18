import { IOptions, RecursivePartial } from 'tsparticles-engine';
import { colorTheme } from '../styleConfig';

export const heroParticlConfig: RecursivePartial<IOptions> = {
  fpsLimit: 120,
  background: {
    color: {
      value: colorTheme.primary,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
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
      value: colorTheme.tertiary,
    },
    links: {
      color: colorTheme.tertiary,
      distance: 100,
      enable: true,
      opacity: 0.6,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
  fullScreen: false,
};
