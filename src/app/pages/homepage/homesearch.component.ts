import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { PredictComponent } from '../predictionscreate/predict.component';

@Component({
  selector: 'home-root',
  templateUrl: './homesearch.component.html',
  styleUrl: './homesearch.component.css'
})
export class HomeComponent {
  title = 'NBA Stats Prediction';

  buttonLabel ="Search"

  constructor(private playserService: PlayerService){}

  playerCareer: any[] = []

  isLoading=false

  httpClient = inject(HttpClient)

  predictedStatCols = [{displayName: "Player Name"}]


  ngOnInit(): void {
    this.playserService.playerTotals.subscribe(stats => this.playerCareer = stats)

  }
  
 

  searchPlayer(playerName: string){
    if (!playerName){
      return;
    }
    this.isLoading = true
    const uriEncoded = encodeURI(playerName)
   this.httpClient.get(`http://rest.nbaapi.com/api/PlayerDataTotals/name/${uriEncoded}`)
   .subscribe({next: (data: any) => {this.isLoading = false; this.playserService.updateCareer(data)}, error: (err)=> {this.isLoading = false; console.log(console.log(err) 
   ) }})
  }

  predictClick(){
console.log("hi")
  }
}
