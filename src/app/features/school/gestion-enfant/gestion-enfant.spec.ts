import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEnfant } from './gestion-enfant';

describe('GestionEnfant', () => {
  let component: GestionEnfant;
  let fixture: ComponentFixture<GestionEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
