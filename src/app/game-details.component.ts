import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule], // Add CommonModule here
})
export class GameDetailsComponent implements OnInit {
  gameId!: number;
  game: any;

  // Example game data
  games = [
    { id: 1, name: 'Dare to Connect Games', image: 'assets/images/game1.png', description: 'Description for Dare to Connect Games.' },
    { id: 5, name: 'Talking Stage Cards', image: 'assets/images/game5.png', description: 'Description for Talking Stage Cards.' },
    { id: 4, name: 'Job Interview', image: 'assets/images/game4.png', description: 'Description for Job Interview.' },
    { id: 3, name: 'Couples Therapy Cards', image: 'assets/images/game3.png', description: 'Description for Couples Therapy Cards.' },
    { id: 9, name: 'Cabin Crew Interview Questions', image: 'assets/images/game9.png', description: 'Description for Cabin Crew Interview Questions.' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Get the game ID from the route parameters
    this.gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.game = this.games.find((g) => g.id === this.gameId);

    // Debugging
    console.log('Game ID:', this.gameId);
    console.log('Game Details:', this.game);
  }
  startGame() {
    this.router.navigate([`/game/${this.gameId}/start`]);
  }
  continueGame() {
    const savedProgress = localStorage.getItem(`game-${this.gameId}-progress`);
    if (savedProgress) {
      // Redirect to the saved card index or progress
      this.router.navigate([`/game/${this.gameId}/continue`, { cardIndex: savedProgress }]);
    } else {
      this.startGame();
    }
  }
}
