import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1navComponent } from './tab1nav.component';

describe('Tab1navComponent', () => {
  let component: Tab1navComponent;
  let fixture: ComponentFixture<Tab1navComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1navComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab1navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
