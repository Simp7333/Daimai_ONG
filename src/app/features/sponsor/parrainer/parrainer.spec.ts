import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parrainer } from './parrainer';

describe('Parrainer', () => {
  let component: Parrainer;
  let fixture: ComponentFixture<Parrainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parrainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parrainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
