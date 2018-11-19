import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { Location } from "@angular/common";

@Component({
  selector: "app-profile",
  template: `
    <h2>Profile works!</h2>
    <p>A.K.A: {{ member.name }}</p>
    <p>Age: {{ member.age }}</p>
    <p>Bounty: {{ member.bounty }}</p>
    <button class="btn btn-secondary" (click)="handleClick()">Back</button>
  `
})
export class ProfileComponent implements OnInit, OnDestroy {
  member: any = {};
  id: string;
  sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.sub = this.getData(this.id).subscribe(data => (this.member = data));
  }

  getData(id: string): Observable<any> {
    return this.http.get(`http://localhost:5000/members/${id}`);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleClick(): void {
    this.location.back();
  }
}
