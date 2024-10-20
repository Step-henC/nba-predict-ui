import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { PredictComponent } from '../predictionscreate/predict.component';
import { AlertModel } from '../../model/AlertModel';

@Component({
  selector: 'home-root',
  templateUrl: './homesearch.component.html',
  styleUrl: './homesearch.component.css',
})
export class HomeComponent {
  title = 'NBA Stats Prediction';

  buttonLabel = 'Search';

  constructor(private playserService: PlayerService) {}

  playerCareer: any[] = [];

  isLoading = false;

  httpClient = inject(HttpClient);

  predictedStatCols = [
    { displayName: 'Player Name', selector: 'playerName' },
    { displayName: 'Team', selector: 'team' },
    { displayName: 'Seaons', selector: 'season' },
    { displayName: 'Total Points', selector: 'points' },
    { displayName: 'Total Rebounds', selector: 'totalRb' },
    { displayName: 'Total Assists', selector: 'assists' },
  ];

  showAlert = false;

  alertModel = new AlertModel('success', 'success', 0);

  ngOnInit(): void {
    this.playserService.playerTotals.subscribe(
      (stats) => (this.playerCareer = stats)
    );
  }

  searchPlayer(playerName: string) {
    if (!playerName) {
      return;
    }
    this.isLoading = true;
    const uriEncoded = encodeURI(playerName);
    this.httpClient
      .get(`http://rest.nbaapi.com/api/PlayerDataTotals/name/${uriEncoded}`)
      .subscribe({
        next: (data: any) => {
          this.onSuccess(data);
        },
        error: (err) => {
          this.onError(err);
        },
      });
  }

  onSuccess(data: any) {
    this.isLoading = false;
    this.showAlert = true;
    this.alertModel.message = 'Successfully retrieved player data!';
    this.playserService.updateCareer(data);
    this.alertModel.timeout = 3000;
  }

  onError(error: any) {
    this.isLoading = false;
    this.showAlert = true;
    this.alertModel.status = 'error';
    this.alertModel.message =
      'Error. Make sure player is active and name is spelled correctly';
    console.log(error);
  }
}
