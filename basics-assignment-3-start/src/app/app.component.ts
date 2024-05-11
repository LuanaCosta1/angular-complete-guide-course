import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  logs = [];

  displayP() {
    this.display = !this.display;
    this.logs.push({
      text: 'display clicked', 
      color: (this.logs.length >= 4) ? 'blue' : 'white'
    });
  }
}
