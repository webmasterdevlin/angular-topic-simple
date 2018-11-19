import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./components/home.component";
import { AboutComponent } from "./components/about.component";
import { LoginComponent } from "./components/login.component";
import { ProfileComponent } from "./components/profile.component";
import { HttpClientModule } from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppModule {}
