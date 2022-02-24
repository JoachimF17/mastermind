import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickCombinationComponent } from './pick-combination.component';

describe('PickCombinationComponent', () => {
  let component: PickCombinationComponent;
  let fixture: ComponentFixture<PickCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickCombinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
