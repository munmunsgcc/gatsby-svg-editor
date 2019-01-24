import React from 'react';
import Header from '../components/header';
import Method from '../components/methods';

export default () => (
  <div>
    <Header title="SVG Editor API" subtitle="" link="/" />
    <Method
      title="Edit"
      desc="Readily available instance created and attached to windows. Open up Developer Tools to access it."
      example="console.log(Edit);"
    />
    <Method title=".clear()" desc="Removes all items in canvas." example="Edit.clear();" />
    <Method title=".circle(rx, ry, r)" desc="Creates a circle in canvas." />
  </div>
);
