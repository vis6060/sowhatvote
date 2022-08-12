import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big5parteComponent } from './big5parte.component';

describe('Big5parteComponent', () => {
  let component: Big5parteComponent;
  let fixture: ComponentFixture<Big5parteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Big5parteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Big5parteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
