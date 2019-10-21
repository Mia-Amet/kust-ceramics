import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCatalogComponent } from './courses-catalog.component';

describe('CoursesCatalogComponent', () => {
  let component: CoursesCatalogComponent;
  let fixture: ComponentFixture<CoursesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
