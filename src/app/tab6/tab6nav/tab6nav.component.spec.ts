import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab6navComponent } from './tab6nav.component';

describe('Tab6navComponent', () => {
  let component: Tab6navComponent;
  let fixture: ComponentFixture<Tab6navComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab6navComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab6navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
