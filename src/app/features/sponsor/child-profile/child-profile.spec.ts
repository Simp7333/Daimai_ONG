import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProfile } from './child-profile';

describe('ChildProfile', () => {
  let component: ChildProfile;
  let fixture: ComponentFixture<ChildProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
