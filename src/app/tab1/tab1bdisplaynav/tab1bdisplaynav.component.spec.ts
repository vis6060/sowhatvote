import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1bdisplaynavComponent } from './tab1bdisplaynav.component';

describe('Tab1bdisplaynavComponent', () => {
  let component: Tab1bdisplaynavComponent;
  let fixture: ComponentFixture<Tab1bdisplaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab1bdisplaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab1bdisplaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
