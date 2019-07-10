import React from 'react';

import './app.scss';

export const App = () => {
  return (
    <div>
      <ui-nav>
        <img src="https://github.com/mahcr/angular-elements/blob/master/assets/ng-horizontal.png?raw=true" slot="logo-angular" />
        <img src="https://raw.githubusercontent.com/mahcr/angular-elements/master/assets/gdg-pv.png" slot="logo-gdg" />
      </ui-nav>
    </div>
  );
};

export default App;
