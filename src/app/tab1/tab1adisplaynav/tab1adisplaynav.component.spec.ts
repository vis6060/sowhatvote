import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1adisplaynavComponent } from './tab1adisplaynav.component';

describe('Tab1adisplaynavComponent', () => {
  let component: Tab1adisplaynavComponent;
  let fixture: ComponentFixture<Tab1adisplaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1adisplaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab1adisplaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
