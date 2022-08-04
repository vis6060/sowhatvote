import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstatenavComponent } from './instatenav.component';

describe('InstatenavComponent', () => {
  let component: InstatenavComponent;
  let fixture: ComponentFixture<InstatenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstatenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstatenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
