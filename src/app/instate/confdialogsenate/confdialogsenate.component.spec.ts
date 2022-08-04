import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfdialogsenateComponent } from './confdialogsenate.component';

describe('ConfdialogsenateComponent', () => {
  let component: ConfdialogsenateComponent;
  let fixture: ComponentFixture<ConfdialogsenateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfdialogsenateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfdialogsenateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
