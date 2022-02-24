import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGuessComponent } from './player-guess.component';

describe('PlayerGuessComponent', () => {
  let component: PlayerGuessComponent;
  let fixture: ComponentFixture<PlayerGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerGuessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
