import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big5partaeditComponent } from './big5partaedit.component';

describe('Big5partaeditComponent', () => {
  let component: Big5partaeditComponent;
  let fixture: ComponentFixture<Big5partaeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Big5partaeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Big5partaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
