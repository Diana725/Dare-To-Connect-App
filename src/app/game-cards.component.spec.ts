import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameCardsComponent } from './game-cards.component';

describe('GameCardsComponent', () => {
  let component: GameCardsComponent;
  let fixture: ComponentFixture<GameCardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GameCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
