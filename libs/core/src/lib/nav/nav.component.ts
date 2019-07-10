import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavComponent {
  constructor() { }
}
