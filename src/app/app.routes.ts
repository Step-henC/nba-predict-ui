import { Routes } from '@angular/router';
import { PredictComponent } from './pages/predictionscreate/predict.component';
import { HomeComponent } from './pages/homepage/homesearch.component';
import { PersonalComponent } from './pages/myPredictions/personal.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: 'home', title: "Search NBA Player", component: HomeComponent},
  {path: 'predict', title: "Predict Next Season", component: PredictComponent},
  {path: 'personal-player-predictions', title: "My Predictions", component: PersonalComponent},
  {path: '', title: "Search Player", component: AppComponent},
  {path: '**', redirectTo: ''}
];
