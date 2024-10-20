import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import Chart from 'chart.js/auto';
import { PlayerCareer, PlayerPredictions } from '../../model/PlayerPrediction';

@Component({
  selector: 'predict-root',
  templateUrl: './predict.component.html',
  styleUrl: './predict.component.css',
})
export class PredictComponent {
  title = 'Predict Next Season';

  constructor(private playserService: PlayerService) {}

  public chart: any;

  httpClient = inject(HttpClient);

  playerCareer: PlayerCareer[] = []; //check that this works ?

  playerPrediction: PlayerPredictions = new PlayerPredictions();
  tableData: any[] = [];

  predictionColumn = [
    { displayName: 'Player Name', selector: 'playerName' },
    { displayName: 'Last Season Pts', selector: 'lastSeasonPoints' },
    { displayName: 'Predicted Points', selector: 'predictedPoints' },
    { displayName: 'Predicted Rebounds', selector: 'predictedRebounds' },
    { displayName: 'Predicted Assists', selector: 'predictedAssists' },
  ];

  loading: boolean = false;

  ngOnInit(): void {
    this.playserService.playerTotals.subscribe(
      (stats) => (this.playerCareer = stats)
    );
    this.createChart();
  }

  makePrediction() {
    this.loading = true;
    this.httpClient
      .post(
        `http://predict-lb-627874032.us-east-1.elb.amazonaws.com:8080/api/v1/add-prediction`,
        this.playerCareer
      )
      .subscribe({
        next: (data: PlayerPredictions) => {
          this.onSuccess(data);
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
        },
      });
  }

  onSuccess(data: PlayerPredictions) {
    this.playerPrediction = data;
    this.tableData.push(this.playerPrediction);
    console.log(this.tableData);
    this.loading = false;
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'scatter', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.playerCareer.map((stat) => stat?.season),
        datasets: [
          {
            label: 'Points',
            data: this.playerCareer.map((stat) => stat?.points),
            backgroundColor: 'blue',
          },
          {
            label: 'Assists',
            data: this.playerCareer.map((stat) => stat?.assists),
            backgroundColor: 'limegreen',
          },
          {
            label: 'Rebounds',
            data: this.playerCareer.map((stat) => stat?.totalRb),
            backgroundColor: 'black',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
