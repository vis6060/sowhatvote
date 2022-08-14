import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab6cdisplaynavComponent } from './tab6cdisplaynav.component';

describe('Tab6cdisplaynavComponent', () => {
  let component: Tab6cdisplaynavComponent;
  let fixture: ComponentFixture<Tab6cdisplaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab6cdisplaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab6cdisplaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
