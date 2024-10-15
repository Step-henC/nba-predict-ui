import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'mock-root',
  templateUrl: './mock.component.html',
  styleUrl: './mock.component.css'
})
export class MockComponent {

@Input() playerSearchHistory: string[] = [];
@Input() playerName = ''
label = "Heron Sports"

links =  [{href: 'http://localhost:4200/predict', label: "NBA"}, {href: "/wnba", label: "WNBA"}]

onSearch() {
this.playerSearchHistory.push(this.playerName)

}
}