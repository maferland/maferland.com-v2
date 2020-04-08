import Head from 'next/head';
import { Controller, Scene } from 'react-scrollmagic';
import Hero from '../components/hero';
import Layout from '../components/layout';
import IndexContent from '../site/content/home.json';
import './index.scss';

const Index = () => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Head>

    <Layout>
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Hero className="page fullheight" suffixes={IndexContent.suffixes} />
        <Scene duration="100%" pin>
          <div className="scene has-pink-background" />
        </Scene>
        <div className="fullheight has-purple-background" />
      </Controller>
    </Layout>
  </>
);

export default Index;
