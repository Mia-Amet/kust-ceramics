import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../../models/Course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-catalog',
  templateUrl: './courses-catalog.component.html',
  styleUrls: ['./courses-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesCatalogComponent implements OnInit {
  courses: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.courses = this.coursesService.courses$;
  }

}
