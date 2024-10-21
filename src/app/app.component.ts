import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @Input() playerSearchHistory: string[] = [];
  @Input() playerName = '';
  label = 'Heron Sports';

  links = [
    { href: '/', label: 'NBA' },
    { href: '/wnba', label: 'WNBA' },
  ];

  onSearch() {
    this.playerSearchHistory.push(this.playerName);
  }
}
