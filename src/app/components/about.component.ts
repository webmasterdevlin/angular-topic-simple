import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  template: `
    <h2>About works!</h2>
    <p>
      Counter: <strong>{{ counter }}</strong>
    </p>
    <button (click)="onClick()">Increment</button>
  `
})
export class AboutComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.counter = this.counter + 1;
  }
}
