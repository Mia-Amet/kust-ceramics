import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOldComponent } from './header-old.component';

describe('HeaderOldComponent', () => {
  let component: HeaderOldComponent;
  let fixture: ComponentFixture<HeaderOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
