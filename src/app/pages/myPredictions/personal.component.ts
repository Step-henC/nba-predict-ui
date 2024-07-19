import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { UserService } from "../../services/user.service";
import { HttpClient } from "@angular/common/http";
import { UserProfile } from "../../model/UserProfile";
import { PlayerPredictions } from "../../model/PlayerPrediction";
import { Observable } from "rxjs";

@Component({
  selector: 'predict-root',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {
  title = "My Predictions"

  constructor(private userService: UserService){}

  httpClient = inject(HttpClient);

  user: UserProfile = new UserProfile();

  personalPlayerPredictionList: PlayerPredictions[] = []

  ngOnInit(): void{
    this.userService.user.subscribe(creds => this.user = creds)
    if (this.user.id !== undefined) {
      this.httpClient.get<PlayerPredictions[]>(`http://localhost:8080/api/v1/players/${this.user.id}`)
      .subscribe({next: (data: PlayerPredictions[]) => {console.log(data); this.personalPlayerPredictionList = data}, error: (err) => console.debug(err)})
    }

  }

}
