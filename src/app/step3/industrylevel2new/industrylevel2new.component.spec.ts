import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Industrylevel2newComponent } from './industrylevel2new.component';

describe('Industrylevel2newComponent', () => {
  let component: Industrylevel2newComponent;
  let fixture: ComponentFixture<Industrylevel2newComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Industrylevel2newComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Industrylevel2newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
