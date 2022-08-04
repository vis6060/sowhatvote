import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstatehousedisplaynavComponent } from './instatehousedisplaynav.component';

describe('InstatehousedisplaynavComponent', () => {
  let component: InstatehousedisplaynavComponent;
  let fixture: ComponentFixture<InstatehousedisplaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstatehousedisplaynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstatehousedisplaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
