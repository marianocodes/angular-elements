import { Component } from '@angular/core';

@Component({
  selector: 'ngelements-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public list = [

    { name: 'Manola', url: 'https://raw.githubusercontent.com/mahcr/angular-elements/master/example-assets/manola.png', instagram: '@hola.man0la' },

    { name: 'Mariano', twitter: '@malvarezcr', url: 'https://raw.githubusercontent.com/mahcr/angular-elements/master/example-assets/me.png', instagram: '@mah.cr' },

  ];
}
