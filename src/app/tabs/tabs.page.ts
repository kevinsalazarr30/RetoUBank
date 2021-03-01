import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() { }


  goToLinkedin() {
    window.open('https://www.linkedin.com/in/kevin-salazar-832b41120/', '_system', 'location=yes'); return false;
  }
}
