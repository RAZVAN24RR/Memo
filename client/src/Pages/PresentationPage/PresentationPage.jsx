//Classic Imports
import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
//Router Imports
// import { useNavigate } from 'react-router-dom';

//CSS Imports
import './PresentationPage.css';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

const tsParticlesConfig = {
  fps_limit: 60,
  interactivity: {
    detect_on: 'canvas',

    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 },
    },
  },
  particles: {
    color: { value: '#0D6EFD' },
    line_linked: {
      color: '#0D6EFD',
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: false,
      speed: 1,
      straight: false,
    },
    number: { density: { enable: true, value_area: 1000 }, value: 30 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5,
    },
    shape: {
      character: {
        fill: false,
        font: 'Verdana',
        style: '',
        value: '*',
        weight: '200',
      },
      polygon: { nb_sides: 5 },
      stroke: { color: '#0D6EFD', width: 0 },
      type: 'circle',
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5,
    },
  },

  retina_detect: true,
};

const PresentationPage = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <div className="Pres">
        <Container fluid="md">
          <Row>
            <h1 className="Pres-title">We are all connected!</h1>
          </Row>

          <div className="Pres-section">
            <i class="arrow-down"></i>
            <h2 className="Pres-titleh2">Already an account?</h2>
            <div className="Pres-btns">
              <Button href="/SignUp" variant="primary">
                SignUp
              </Button>
              <Button href="/LogIn" variant="outline-primary">
                LogIn
              </Button>
            </div>
          </div>
          <div className="Pres-line"></div>
          <div className="Line-Bottom"></div>
        </Container>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={tsParticlesConfig}
      />
    </>
  );
};
export default PresentationPage;
