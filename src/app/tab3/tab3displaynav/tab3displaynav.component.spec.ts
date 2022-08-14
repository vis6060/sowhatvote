import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3displaynavComponent } from './tab3displaynav.component';

describe('Tab3displaynavComponent', () => {
  let component: Tab3displaynavComponent;
  let fixture: ComponentFixture<Tab3displaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab3displaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab3displaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
