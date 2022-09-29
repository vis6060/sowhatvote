import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftcardComponent } from './giftcard.component';

describe('GiftcardComponent', () => {
  let component: GiftcardComponent;
  let fixture: ComponentFixture<GiftcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
