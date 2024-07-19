import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { PlayerService } from "../../services/player.service";
import Chart from 'chart.js/auto';
import { PlayerCareer, PlayerPredictions } from "../../model/PlayerPrediction";
import { UserProfile } from "../../model/UserProfile";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'predict-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './predict.component.html',
  styleUrl: './predict.component.css'
})

export class PredictComponent {
  title = "Predict Next Season"


  constructor(private playserService: PlayerService, private userService: UserService){}

  public chart: any;

  httpClient = inject(HttpClient)

  playerCareer: PlayerCareer[] = []; //check that this works ?

  playerPrediction: PlayerPredictions = new PlayerPredictions();

  user: UserProfile = new UserProfile();

  loading: boolean = true;

  ngOnInit(): void {
    this.userService.user.subscribe(cred => this.user = cred)
    this.playserService.playerTotals.subscribe(stats => this.playerCareer = stats);
    this.createChart()
  }

  makePrediction(){
    this.httpClient.post(`http://localhost:8080/api/v1/add-prediction/${this.user.id}`, this.playerCareer)
            .subscribe({next: (data: PlayerPredictions) => {this.playerPrediction = data; console.log(data)}, error: (err) => console.log(err)})

  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'scatter', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.playerCareer.map((stat) => stat?.season), 
	       datasets: [
          {
            label: "Points",
            data: this.playerCareer.map((stat) => stat?.points),
            backgroundColor: 'blue'
          },
          {
            label: "Assists",
            data: this.playerCareer.map((stat) => stat?.assists),
            backgroundColor: 'limegreen'
          },
          {
            label: "Rebounds",
            data: this.playerCareer.map((stat) => stat?.totalRb),
            backgroundColor: 'black'
          }   
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }


}