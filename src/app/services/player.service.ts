import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PlayerCareer } from "../model/PlayerPrediction";


@Injectable({
  providedIn: "root"
})
export class PlayerService {
  constructor(){

  }

  //json data from nba api is too large of Json object to make into type/class
  playerCareer = new BehaviorSubject<PlayerCareer[]>([]);
  playerTotals = this.playerCareer.asObservable();


  updateCareer(careerStats: []){
    this.playerCareer.next(careerStats);
  }
}