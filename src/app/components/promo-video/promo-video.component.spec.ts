import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoVideoComponent } from './promo-video.component';

describe('PromoBannerComponent', () => {
  let component: PromoVideoComponent;
  let fixture: ComponentFixture<PromoVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
