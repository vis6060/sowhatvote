import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab6displaynavComponent } from './tab6displaynav.component';

describe('Tab6displaynavComponent', () => {
  let component: Tab6displaynavComponent;
  let fixture: ComponentFixture<Tab6displaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab6displaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab6displaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
