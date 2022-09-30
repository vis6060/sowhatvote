import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexascComponent } from './texasc.component';

describe('TexascComponent', () => {
  let component: TexascComponent;
  let fixture: ComponentFixture<TexascComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexascComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
