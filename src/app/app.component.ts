import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

@Input() playerSearchHistory: string[] = [];
@Input() playerName = ''
label = "Heron Sports"

links =  [{href: 'predict', label: "NBA"}, {href: "/wnba", label: "WNBA"}]

onSearch() {
this.playerSearchHistory.push(this.playerName)

}
}
