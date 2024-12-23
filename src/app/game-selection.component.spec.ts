import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor

import { GameSelectionComponent } from './game-selection.component';

describe('GameSelectionComponent', () => {
  let component: GameSelectionComponent;
  let fixture: ComponentFixture<GameSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GameSelectionComponent], // Declare your component here
      imports: [
        IonicModule.forRoot(), // Import IonicModule for testing Ionic components
        CommonModule, // Import CommonModule for directives like *ngFor
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
