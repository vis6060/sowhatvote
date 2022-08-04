import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAComponent } from './ad-a.component';

describe('AdAComponent', () => {
  let component: AdAComponent;
  let fixture: ComponentFixture<AdAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
