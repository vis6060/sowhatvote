import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1cdisplaynavComponent } from './tab1cdisplaynav.component';

describe('Tab1cdisplaynavComponent', () => {
  let component: Tab1cdisplaynavComponent;
  let fixture: ComponentFixture<Tab1cdisplaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1cdisplaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab1cdisplaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
