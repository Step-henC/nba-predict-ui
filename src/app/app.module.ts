import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { PredictionsComponentLibraryModule } from "predictions-component-library";
import { HomeComponent } from "./pages/homepage/homesearch.component";



@NgModule({
  declarations: [
  AppComponent,
  ],
  providers: [],
  imports: [RouterOutlet, RouterModule, BrowserModule, HttpClientModule, PredictionsComponentLibraryModule, HomeComponent],
   bootstrap: [AppComponent]
})

export class AppModule {}