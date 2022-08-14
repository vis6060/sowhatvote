import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3navComponent } from './tab3nav.component';

describe('Tab3navComponent', () => {
  let component: Tab3navComponent;
  let fixture: ComponentFixture<Tab3navComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab3navComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab3navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
