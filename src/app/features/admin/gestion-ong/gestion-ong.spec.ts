import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOng } from './gestion-ong';

describe('GestionOng', () => {
  let component: GestionOng;
  let fixture: ComponentFixture<GestionOng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionOng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionOng);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
