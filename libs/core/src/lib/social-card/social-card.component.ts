import { Component, EventEmitter, Input, ViewEncapsulation, Output } from '@angular/core';

@Component({
  selector: 'ui-socialcard',
  templateUrl: 'social-card.component.html',
  styleUrls: ['./social-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SocialCardComponent {
  @Input()
  public name: string;

  @Input()
  public twitter: string;

  @Input()
  public url: string;

  @Input()
  public instagram: string;

  @Output()
  public toggle = new EventEmitter<boolean>();

  public isFilterActive = false;

  constructor() { }
}
