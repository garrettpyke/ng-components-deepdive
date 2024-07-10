import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlComponent } from './../../../shared/control/control.component';
import { ButtonComponent } from './../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  onSubmit(titleElement: HTMLInputElement) {
    console.dir(titleElement);
    console.log('Form submitted, value: ' + titleElement.value);
  }
}
