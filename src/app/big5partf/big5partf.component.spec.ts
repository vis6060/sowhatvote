import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big5partfComponent } from './big5partf.component';

describe('Big5partfComponent', () => {
  let component: Big5partfComponent;
  let fixture: ComponentFixture<Big5partfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Big5partfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Big5partfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
