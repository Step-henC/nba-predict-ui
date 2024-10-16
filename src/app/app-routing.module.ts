import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/homepage/homesearch.component";
import { MockComponent } from "./mock.component";
import { WnbaComponent } from "./pages/wnba/wnba.component";


const routes: Routes = [
  {path: 'predict', title: "Predict Next Season", component: MockComponent },
  {path: 'wnba', title: "WNBA Predict Stats", component: WnbaComponent},
  {path: '', title: "Search NBA Player", component: HomeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}