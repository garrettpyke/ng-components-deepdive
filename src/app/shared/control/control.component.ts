import {
  Component,
  ElementRef,
  // HostBinding,
  // HostListener,
  ViewEncapsulation,
  inject,
  input,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None, // Default is Emulated (strict encapsulation of child styles)
  host: {
    class: "control",
    "(click)": "onClick();",
  },
})
export class ControlComponent {
  // @HostBinding("class") className = "control"; // Backwards compatibility version
  // Below is alternate host listener syntax. Angular recommends using in Component decorator as above.
  // @HostListener('click') onClick() {
  //   console.log('Clicked: ', this.label);
  // }
  label = input.required<string>();
  private el = inject(ElementRef); // ElementRef can make page vulnerable to X Site Scripting attacks, but is available for programmatic access to host elements

  onClick() {
    console.log(`Clicked: ${this.label}`);
    console.log(this.el);
  }
}
