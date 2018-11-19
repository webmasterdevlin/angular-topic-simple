import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  template: `
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      routerLinkActive="active-link"
      [routerLinkActiveOptions]="{ exact: true }"
    >
      <a class="nav-link" [routerLink]="['/home']">Home</a>
      <a class="nav-link" [routerLink]="['/about']">About</a>
      <a class="nav-link" [routerLink]="['/login']">Login</a>
    </nav>
  `
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
