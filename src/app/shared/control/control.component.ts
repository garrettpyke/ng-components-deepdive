import { Component, ViewEncapsulation, input } from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None, // Default is Emulated (strict encapsulation of child styles)
  host: {
    class: "control",
  },
})
export class ControlComponent {
  label = input.required<string>();
}
