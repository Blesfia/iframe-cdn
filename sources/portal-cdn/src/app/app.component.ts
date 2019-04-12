import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';
  @Input()
  env = 'prod';
  loadedInfo: { tagElement: HTMLElement, scriptElement: HTMLElement } = {
    tagElement: null,
    scriptElement: null,
  };
  change(type) {
    if (type === 'dm') {
      this.load('../dm/main.js', 'dm-root');
    } else if (type === 'xvr') {
      this.load('../xvr/main.js', 'xvr-root');
    }
  }

  load(src, tag) {
    if (this.loadedInfo.tagElement) {
      this.loadedInfo.tagElement.remove();
      this.loadedInfo.scriptElement.remove();
    }
    const container = document.getElementById('container');
    const script = document.createElement('script');
    script.src = src;
    (window as any).XVR_DATA = { env: this.env };
    this.loadedInfo.tagElement = document.createElement(tag);
    container.appendChild(this.loadedInfo.tagElement);
    this.loadedInfo.scriptElement = container.appendChild(script);
  }
}
