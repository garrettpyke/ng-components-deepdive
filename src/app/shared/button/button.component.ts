import { Component } from "@angular/core";

@Component({
  // syntax for an element[attribute] selector - see ng docs on selectors
  selector: "button[appButton]",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent {}
