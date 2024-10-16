import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

@Input() playerSearchHistory: string[] = [];
@Input() playerName = ''
label = "Heron Sports"

links =  [{href:"/",label: "Home" },{href: '/predict', label: "NBA"}, {href: "/wnba", label: "WNBA"}]

onSearch() {
this.playerSearchHistory.push(this.playerName)

}
}
