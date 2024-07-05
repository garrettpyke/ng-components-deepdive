import { Component } from "@angular/core";

@Component({
  // syntax for an element[attribute] selector - see ng docs on selectors
  // the anchor element is not used...just illustrates syntax for multiple selectors
  selector: "button[appButton], a[appButton]",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent {}
