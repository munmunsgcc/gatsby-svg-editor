import React from 'react';
import Header from '../components/header';
import Svg from '../components/editor';
import '../js/api';

export default () => (
  <div>
    <Header
      title="SVG Editor"
      subtitle="Open up Developers Tool and peruse our open API!"
      link="/api"
    />
    <Svg />
  </div>
);
