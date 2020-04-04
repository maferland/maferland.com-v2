import { Controller, Scene } from 'react-scrollmagic';
import Hero from '../components/hero';
import Layout from '../components/layout';
import './index.scss';

const Index = () => (
  <Layout>
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Hero className="page fullheight" />
      <Scene duration="100%" pin>
        <div className="scene has-pink-background" />
      </Scene>
      <div className="fullheight has-purple-background" />
    </Controller>
  </Layout>
);

export default Index;
