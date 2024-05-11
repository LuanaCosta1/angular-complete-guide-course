import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>Erro!</p>`,
  styles: `
    p {
      font-size: 2rem;
      color: red;
    }
  `
})
export class WarningAlertComponent {

}
