import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  template: `
    <h2>Home works!</h2>
    <ul>
      <li *ngFor="let m of members">
        <a [routerLink]="['/profile', m.id]">{{ m.name }}</a>
      </li>
    </ul>
    <p>
      Total bounties: <strong>{{ total }}</strong>
    </p>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  members: any;
  sub: Subscription;
  total: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sub = this.getData().subscribe(data => {
      this.members = data;
      console.log(this.members);

      this.total = this.members.map(m => m.bounty).reduce((a, c) => a + c);
      console.log(this.total);
    });
  }

  getData(): Observable<any> {
    return this.http.get("http://localhost:5000/members");
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
