import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBComponent } from './ad-b.component';

describe('AdBComponent', () => {
  let component: AdBComponent;
  let fixture: ComponentFixture<AdBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
