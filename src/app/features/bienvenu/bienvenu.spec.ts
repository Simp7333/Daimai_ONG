import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bienvenu } from './bienvenu';

describe('Bienvenu', () => {
  let component: Bienvenu;
  let fixture: ComponentFixture<Bienvenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bienvenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bienvenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
