import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviFinancier } from './suivi-financier';

describe('SuiviFinancier', () => {
  let component: SuiviFinancier;
  let fixture: ComponentFixture<SuiviFinancier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuiviFinancier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviFinancier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
