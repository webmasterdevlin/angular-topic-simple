import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  template: `
    <h2>About works!</h2>
    <p>
      Counter: <strong>{{ counter }}</strong>
    </p>
    <button class="btn btn-success" (click)="onClick()">Increment</button>
  `
})
export class AboutComponent {
  counter: number = 0;

  onClick(): void {
    this.counter = this.counter + 1;
  }
}
