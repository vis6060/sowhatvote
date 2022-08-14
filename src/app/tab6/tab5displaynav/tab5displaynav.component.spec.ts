import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab5displaynavComponent } from './tab5displaynav.component';

describe('Tab5displaynavComponent', () => {
  let component: Tab5displaynavComponent;
  let fixture: ComponentFixture<Tab5displaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab5displaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab5displaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
