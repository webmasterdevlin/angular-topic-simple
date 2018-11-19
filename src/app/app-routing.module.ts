import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home.component";
import { AboutComponent } from "./components/about.component";
import { LoginComponent } from "./components/login.component";
import { ProfileComponent } from "./components/profile.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
