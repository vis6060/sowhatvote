import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfdialoggovernComponent } from './confdialoggovern.component';

describe('ConfdialoggovernComponent', () => {
  let component: ConfdialoggovernComponent;
  let fixture: ComponentFixture<ConfdialoggovernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfdialoggovernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfdialoggovernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
