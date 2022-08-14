import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationSearchComponent } from './occupation-search.component';

describe('OccupationSearchComponent', () => {
  let component: OccupationSearchComponent;
  let fixture: ComponentFixture<OccupationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupationSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
