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

    // sort by season ascending
    const sortedCareer = careerStats.sort((first: PlayerCareer, next: PlayerCareer) => {
      const firstSeason = first.season ?? 0;
      const nextSeason = next.season ?? 0;
      if (firstSeason < nextSeason){
        return -1;

      } else if (
        nextSeason < firstSeason) {
          return 1;
        }
        return 0;
    })
    this.playerCareer.next(sortedCareer);
  }
}