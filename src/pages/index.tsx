import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';
import ParticleBackground from '../components/Animations/ParticleBackground';
import BackgroundTransition from '../components/Animations/BackgroundTransition';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <BackgroundTransition />
      <ParticleBackground />
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Resume />    
      <Testimonials />

      <Footer />
    </Page>
  );
});

export default Home;
