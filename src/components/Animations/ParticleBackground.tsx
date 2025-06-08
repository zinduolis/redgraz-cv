import { FC, memo, useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Container, Engine } from '@tsparticles/engine';

const particleOptions = {
  background: { 
    color: { 
      value: 'transparent' 
    } 
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { 
        enable: true, 
        mode: 'repulse' 
      },
      resize: {
        enable: true
      },
    },
    modes: {
      repulse: { 
        distance: 100, 
        duration: 0.4 
      },
    },
  },
  particles: {
    color: { 
      value: '#a3e635' 
    },
    links: { 
      enable: true, 
      color: '#a3e635', 
      distance: 150, 
      opacity: 0.2, 
      width: 1 
    },
    move: { 
      enable: true, 
      speed: 1, 
      outModes: {
        default: 'bounce'
      }
    },
    number: { 
      value: 40, 
      density: { 
        enable: true 
      } 
    },
    opacity: { 
      value: 0.3 
    },
    shape: { 
      type: 'circle' 
    },
    size: { 
      value: { 
        min: 1, 
        max: 4 
      } 
    },
  },
  detectRetina: true,
} as const;

const ParticleBackground: FC = memo(() => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loads the tsparticles slim package bundle
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles loaded:', container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles-bg"
        particlesLoaded={particlesLoaded}
        options={particleOptions}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />
    );
  }

  return <></>;
});

ParticleBackground.displayName = 'ParticleBackground';
export default ParticleBackground;
