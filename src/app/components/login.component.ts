import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  template: `
    <h2>Login works!</h2>

    <input type="password" [(ngModel)]="text" />

    <p *ngIf="text.length > 0">Your password is: {{ text }}</p>
    <!-- <p>{{text && "Your password is: "}} {{text}}</p> -->
  `
})
export class LoginComponent implements OnInit {
  text: string = "";

  constructor() {}

  ngOnInit() {}
}
