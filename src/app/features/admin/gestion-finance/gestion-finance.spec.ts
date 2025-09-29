import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFinance } from './gestion-finance';

describe('GestionFinance', () => {
  let component: GestionFinance;
  let fixture: ComponentFixture<GestionFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionFinance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFinance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
