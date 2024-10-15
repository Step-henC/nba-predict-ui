import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PredictComponent } from "./pages/predictionscreate/predict.component";
import { HomeComponent } from "./pages/homepage/homesearch.component";
import { MockComponent } from "./mock.component";

const routes: Routes = [
  {path: 'predict', title: "Predict Next Season", component: MockComponent },
  {path: '', title: "Search Player", component: HomeComponent},
  {path: '**', redirectTo: ''}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}