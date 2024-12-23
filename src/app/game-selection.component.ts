import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
import { Router } from '@angular/router'; // If you need routing

@Component({
  selector: 'app-game-selection',
  standalone: true, // Declare as a standalone component
  imports: [IonicModule, CommonModule], // Import IonicModule and CommonModule
  templateUrl: './game-selection.component.html', // Path to your HTML
  styleUrls: ['./game-selection.component.scss'], // Path to your SCSS
})
export class GameSelectionComponent {
  games = [
    { id: 1, name: 'Dare to Connect Games', image: 'assets/images/game1.png' },
    { id: 5, name: 'Talking Stage Cards', image: 'assets/images/game5.png' },
    { id: 4, name: 'Job Interview', image: 'assets/images/game4.png' },
    { id: 3, name: 'Couples Therapy', image: 'assets/images/game3.png' },
    { id: 9, name: 'Cabin Crew Interview Questions', image: 'assets/images/game9.png' },
  ];

  constructor(private router: Router) {}

  goToGame(gameId: number) {
    this.router.navigate(['/game-details', gameId]); // Navigate to game details page
  }
}
