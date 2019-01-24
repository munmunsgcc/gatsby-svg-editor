import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: calc(100% - 50px);
  height: 400px;
  margin: 0 25px;
  outline: 1px solid #f8f8f8;
  border-radius: 3px;
  box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.05);

  :hover {
    box-shadow: 0px 0px 17px -4px rgba(0, 0, 0, 0.75);
  }
`;

const Defs = () => (
  <defs>
    <pattern id="small_grid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M10 0 L0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5" />
    </pattern>
    <pattern id="big_grid" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#small_grid)" />
      <path d="M100 0 L0 0 0 100" fill="none" stroke="gray" strokeWidth="1" />
    </pattern>
  </defs>
);

const Body = () => <svg id="canvas" width="100%" height="100%" />;

export default () => (
  <Svg id="grid">
    <Defs />
    <rect width="100%" height="100%" fill="url(#big_grid)" />
    <Body />
  </Svg>
);
