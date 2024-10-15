import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { PredictionsComponentLibraryModule } from "predictions-component-library";
import { HomeComponent } from "./pages/homepage/homesearch.component";
import { PredictComponent } from "./pages/predictionscreate/predict.component";
import { AppRoutingModule } from "./app-routing.module";



@NgModule({
  declarations: [
  AppComponent,
  PredictComponent,
  HomeComponent,

  ],
  providers: [],
  imports: [BrowserModule, AppRoutingModule, PredictionsComponentLibraryModule],
   bootstrap: [AppComponent]
})

export class AppModule {}