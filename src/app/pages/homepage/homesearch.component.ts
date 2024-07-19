import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'home-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, RouterLink],
  templateUrl: './homesearch.component.html',
  styleUrl: './homesearch.component.css'
})
export class HomeComponent {
  title = 'Become Your Own General Manager!';


  constructor(private playserService: PlayerService){}

  playerCareer: any[] = []

  httpClient = inject(HttpClient)

  ngOnInit(): void {
    this.playserService.playerTotals.subscribe(stats => this.playerCareer = stats)

  }
  
 

  searchPlayer(playerName: string){
    if (!playerName){
      return;
    }

    const uriEncoded = encodeURI(playerName)
   this.httpClient.get(`http://rest.nbaapi.com/api/PlayerDataTotals/name/${uriEncoded}`)
   .subscribe({next: (data: any) => {this.playserService.updateCareer(data)}, error: (err)=>console.log(console.log(err)
   )})
  }
}
