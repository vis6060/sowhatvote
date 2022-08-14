import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2navComponent } from './tab2nav.component';

describe('Tab2navComponent', () => {
  let component: Tab2navComponent;
  let fixture: ComponentFixture<Tab2navComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab2navComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab2navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
