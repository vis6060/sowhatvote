import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstatesenatedisplaynavComponent } from './instatesenatedisplaynav.component';

describe('InstatesenatedisplaynavComponent', () => {
  let component: InstatesenatedisplaynavComponent;
  let fixture: ComponentFixture<InstatesenatedisplaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstatesenatedisplaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstatesenatedisplaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
