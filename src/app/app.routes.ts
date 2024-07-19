import { Routes } from '@angular/router';
import { PredictComponent } from './pages/predictionscreate/predict.component';
import { HomeComponent } from './pages/homepage/homesearch.component';
import { Login } from './pages/login/login.component';
import { PersonalComponent } from './pages/myPredictions/personal.component';

export const routes: Routes = [
  {path: 'home', title: "Search NBA Player", component: HomeComponent},
  {path: 'predict', title: "Predict Next Season", component: PredictComponent},
  {path: '', title: "NBA Login", component: Login},
  {path: 'personal-player-predictions', title: "My Predictions", component: PersonalComponent},
  {path: '**', redirectTo: ''}


];
