import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';
  showIframe = false;
  url;
  constructor(private sanitizer: DomSanitizer) {
  }
  change(url) {
    this.showIframe = true;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
