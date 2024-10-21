import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/homepage/homesearch.component";
import { WnbaComponent } from "./pages/wnba/wnba.component";
import { MlbComponent } from "./pages/mlb/mlb.component";


const routes: Routes = [
  {path: 'wnba', title: "Predict WNBA Player Stats", component: WnbaComponent},
  {path: '', title: "Predict NBA Player Stats", component: HomeComponent},
  {path: 'mlb', title: "Predict MLB Player Stats", component: MlbComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}