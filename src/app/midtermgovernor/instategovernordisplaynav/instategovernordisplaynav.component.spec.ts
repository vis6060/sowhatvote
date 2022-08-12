import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstategovernordisplaynavComponent } from './instategovernordisplaynav.component';

describe('InstategovernordisplaynavComponent', () => {
  let component: InstategovernordisplaynavComponent;
  let fixture: ComponentFixture<InstategovernordisplaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstategovernordisplaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstategovernordisplaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
