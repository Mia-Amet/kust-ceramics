import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-courses-catalog',
  templateUrl: './courses-catalog.component.html',
  styleUrls: ['./courses-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesCatalogComponent implements OnInit {
  courses: Observable<Course[]>;

  constructor(
    private fireStore: AngularFirestore,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    const compareFn = (a, b) => {
      if (a.group < b.group)
        return -1;
      if (a.group > b.group)
        return 1;
      return 0;
    };

    const price = (a, b) => {
      if (a.price < b.price)
        return -1;
      if (a.price > b.price)
        return 1;
      return 0;
    };

    this.courses = this.fireStore.collection('courses')
      .get()
      .pipe(
        map(querySnapshot => querySnapshot.docs.map(doc => <Course>doc.data())),
        map(courses => courses.filter(course => course.photos.length)),
        map(courses => courses.sort(price)),
        map(courses => courses.sort(compareFn))
      );

    
  }

}
