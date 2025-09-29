import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportSuivi } from './rapport-suivi';

describe('RapportSuivi', () => {
  let component: RapportSuivi;
  let fixture: ComponentFixture<RapportSuivi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapportSuivi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportSuivi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
