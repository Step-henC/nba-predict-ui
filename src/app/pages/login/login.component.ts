import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { UserService } from "../../services/user.service";
import { HttpClient } from "@angular/common/http";
import { UserProfile } from "../../model/UserProfile";

@Component({
  selector: 'login-root',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class Login {
  title = "Login"


  constructor(private userService: UserService, private router: Router){}

  httpClient = inject(HttpClient)

  user: UserProfile = new UserProfile();


  setUserName(event: any){

      this.user.userName = event.target.value;
  }

  setPassword(event: any){
    this.user.password = event.target.value
  }

  submitLogin(event: Event){
    event.preventDefault();
    this.httpClient.post("http://localhost:8080/api/v1/user", this.user)
    .subscribe({next: (data: UserProfile) => {
      this.userService.updateUser(data); 
      this.router.navigate(
        ['/home']
      )
    }, error: (err) => console.log(err)})
  }
}