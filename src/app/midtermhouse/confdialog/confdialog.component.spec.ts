import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfdialogComponent } from './confdialog.component';

describe('ConfdialogComponent', () => {
  let component: ConfdialogComponent;
  let fixture: ComponentFixture<ConfdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
