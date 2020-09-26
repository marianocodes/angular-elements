import React from 'react';
import './app.scss';

let id = 0;

export const App = () => {

  const list = [
    { name: 'Manola', url: 'https://raw.githubusercontent.com/mahcr/angular-elements/master/example-assets/manola.png', instagram: '@hola.man0la' },
    { name: 'Mariano', twitter: '@malvarezcr', url: 'https://raw.githubusercontent.com/mahcr/angular-elements/master/example-assets/me.png', instagram: '@mah.cr' },
  ];

  return (
    <>
      <ui-nav>
        <img src="https://raw.githubusercontent.com/mahcr/angular-elements/master/example-assets/ng-horizontal.png" slot="logo-angular" />
        <img src="https://raw.githubusercontent.com/mahcr/angular-elements/master/example-assets/gdg-pv.png" slot="logo-gdg" />
      </ui-nav>

      <h1>Hola - I'm React app</h1>

      <main>

        {
          list.map((profile) =>
            <ui-socialcard
              key={id++}
              name={profile.name}
              url={profile.url}
              twitter={profile.twitter}
              instagram={profile.instagram}
            ></ui-socialcard>
          )
        }

      </main>

      <ui-footer></ui-footer>
    </>
  );
};

export default App;
