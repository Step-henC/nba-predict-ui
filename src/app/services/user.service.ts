import { Injectable } from "@angular/core";
import { UserProfile } from "../model/UserProfile";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(){}


  userProfile = new BehaviorSubject<UserProfile>(new UserProfile())
  user = this.userProfile.asObservable();

  updateUser(credentials: UserProfile){
    this.userProfile.next(credentials)
  }
}