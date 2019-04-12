import { Component, Input, Inject } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'xvr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  env;
  title = 'xvr';

  constructor(@Inject('AppData') appData) {
    this.env = (appData || {}).env;
  }
}
