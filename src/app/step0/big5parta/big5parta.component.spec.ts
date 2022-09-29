import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big5partaComponent } from './big5parta.component';

describe('Big5partaComponent', () => {
  let component: Big5partaComponent;
  let fixture: ComponentFixture<Big5partaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Big5partaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Big5partaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
