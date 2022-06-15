import React from 'react';
import Hero from '/components/Hero/Hero'
import PropertiesIndex from '/components/PropertiesIndex/PropertiesIndex'
import './Main.css'

const Main = () => {
  return (
    <main>
      <Hero/>
      <PropertiesIndex/>
    </main>
  );
}

export default Main;