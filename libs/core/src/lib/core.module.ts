import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import {
  NavComponent,
  FooterComponent,
  SocialCardComponent
} from './index';

@NgModule({
  imports: [BrowserModule],
  declarations: [NavComponent, FooterComponent, SocialCardComponent],
  entryComponents: [NavComponent, FooterComponent, SocialCardComponent],
  bootstrap: []
})
export class CoreModule {
  constructor(private injector: Injector) { }

  public ngDoBootstrap() {
    let component;

    component = createCustomElement(NavComponent, { injector: this.injector });
    customElements.define('ui-nav', component);

    component = createCustomElement(FooterComponent, { injector: this.injector });
    customElements.define('ui-footer', component);

    component = createCustomElement(SocialCardComponent, { injector: this.injector });
    customElements.define('ui-socialcard', component);
  }
}
