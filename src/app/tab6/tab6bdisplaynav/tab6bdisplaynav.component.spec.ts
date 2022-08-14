import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab6bdisplaynavComponent } from './tab6bdisplaynav.component';

describe('Tab6bdisplaynavComponent', () => {
  let component: Tab6bdisplaynavComponent;
  let fixture: ComponentFixture<Tab6bdisplaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab6bdisplaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab6bdisplaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
