import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big5partdComponent } from './big5partd.component';

describe('Big5partdComponent', () => {
  let component: Big5partdComponent;
  let fixture: ComponentFixture<Big5partdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Big5partdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Big5partdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
