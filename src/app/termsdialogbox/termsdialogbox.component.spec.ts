import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsdialogboxComponent } from './termsdialogbox.component';

describe('TermsdialogboxComponent', () => {
  let component: TermsdialogboxComponent;
  let fixture: ComponentFixture<TermsdialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsdialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsdialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
