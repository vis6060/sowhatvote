import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3bdisplaynavComponent } from './tab3bdisplaynav.component';

describe('Tab3bdisplaynavComponent', () => {
  let component: Tab3bdisplaynavComponent;
  let fixture: ComponentFixture<Tab3bdisplaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab3bdisplaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab3bdisplaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
